import { MersenneTwister19937, bool } from 'random-js';
import { access } from 'fs';
import { accessibility } from 'pixi.js';
import Chunk from './Chunk';
import { MinMax, ChunkTile, calcMineAmbiguity, calcSucess } from './utils';
import Tile from './Tile';
import { TileContent, SweepResult, SweptTile } from './types';

const randEngine = MersenneTwister19937.autoSeed();

export default class World {
  static readonly NUM_CHUNKS = 64;
  static readonly SIZE = World.NUM_CHUNKS * Chunk.SIZE;

  static randMine(percent: number): boolean {
    const perc = MinMax(1, percent, 99);
    return bool(perc, 100)(randEngine);
  }

  chunks: Chunk[][] = [];

  constructor() {
    this.initChunks();
    this.paintBiomes();
    this.placeMines();
  }

  initChunks(): void {
    this.chunks = [];
    for (let y = 0; y < World.SIZE; y = +1) {
      this.chunks[y] = [];
      for (let x = 0; x < World.SIZE; x += 1) {
        this.chunks[y].push(new Chunk({ x, y }));
      }
    }
  }

  paintBiomes(): void {
    this.forEachTile((y, x, tile) => {
      tile.density = 20;
      tile.terrain = 0;
    });
  }

  placeMines(): void {
    this.forEachTile((y, x, tile) => {
      const needsMine = World.randMine(tile.density);
      tile.density = 0;
      if (needsMine) {
        tile.reading = Tile.MINE;
        this.forEachNeighbor(y, x, (yy, xx, nearTile) => {
          if (nearTile.reading < Tile.MINE) nearTile.reading += 1;
        });
      }
    });
  }

  sweepTile(y: number, x: number): SweepResult {
    const swept: SweptTile[][] = [];
    let totalScore = 0;
    let explosion = false;
    let recursiveChildren: [number, number][] = [[y, x]];
    let nextRecursion: [number, number][] = [];
    let depth = 0;
    while (recursiveChildren.length > 0) {
      const lim = recursiveChildren.length;
      for (let i = 0; i < lim; i += 1) {
        const [yy, xx] = recursiveChildren[i];
        const tile = this.accessTile(yy, xx);
        if (!tile.visible) {
          const score = this.calculateSweepValue(yy, xx);
          totalScore += score;
          tile.visible = 1;
          if (tile.reading === Tile.MINE) explosion = true;
          swept[depth].push({
            x: xx,
            y: yy,
            score,
            reading: tile.reading,
          });
          // eslint-disable-next-line no-loop-func
          this.forEachNeighbor(yy, xx, (yyy, xxx, nextTile) => {
            if (tile.reading === 0 && !nextTile.visible) nextRecursion.push([yyy, xxx]);
            if (tile.reading === 9 && nextTile.reading < 9) nextTile.reading -= 1;
            nextTile.untested -= 1;
          });
        }
      }
      recursiveChildren = nextRecursion;
      nextRecursion = [];
      depth += 1;
    }
    return {
      revealedTiles: swept,
      explosion,
      totalScore,
    };
  }

  calculateSweepValue(y: number, x: number): number {
    let lowestCertainNeighbor = Infinity;
    let highestUncertainChance = -Infinity;
    let highestUncertainValue = 0;
    this.forEachNeighbor(y, x, (yy, xx, tile) => {
      if (tile.reading === Tile.MINE) return;
      if (tile.certain && tile.reading < lowestCertainNeighbor) {
        lowestCertainNeighbor = tile.reading;
      } else if (!tile.certain) {
        const successChance = calcSucess(tile.reading, tile.untested);
        if (successChance > highestUncertainChance) {
          highestUncertainChance = successChance;
          highestUncertainValue = tile.reading;
        }
      }
    });
    let sweepValue = 0;
    if (lowestCertainNeighbor !== Infinity) {
      sweepValue = 2 ** lowestCertainNeighbor;
    } else if (highestUncertainChance !== -Infinity) {
      const multiplier = 1 + Math.ceil(10 * (0.9 - highestUncertainChance)) / 10;
      sweepValue = 2 ** highestUncertainValue * multiplier;
    }
    return Math.max(1, sweepValue);
  }

  forEachTile(operation: (y: number, x: number, tile: Tile) => void): void {
    for (let y = 0; y < World.SIZE; y += 1) {
      for (let x = 0; x < World.SIZE; x += 1) {
        operation(y, x, this.accessTile(y, x));
      }
    }
  }

  forEachNeighbor(y: number, x: number, operation: (y: number, x: number, tile: Tile) => void): void {
    const mods = [
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
    ];
    const lim = mods.length;
    for (let i = 0; i < lim; i += 1) {
      const yy = y + mods[i][0];
      const xx = x + mods[i][1];
      operation(yy, xx, this.accessTile(yy, xx));
    }
  }

  accessTile(y: number, x: number): Tile {
    const { cy, cx, ty, tx } = ChunkTile(y, x, World.SIZE, Chunk.SIZE);
    return this.chunks[cy][cx].accessTile(ty, tx);
  }
}

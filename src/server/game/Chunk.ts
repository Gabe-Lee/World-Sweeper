import Tile from './Tile';
import { Coordinate } from './types';

export default class Chunk {
  static SIZE = 64;

  coordinates: Coordinate;
  tileBuffer = new ArrayBuffer(Chunk.SIZE ** 2 * Tile.BYTES);
  tileStrip = new Uint16Array(this.tileBuffer);

  constructor(coordinates: Coordinate) {
    this.coordinates = coordinates;
  }

  accessTile(y: number, x: number): Tile {
    const index = y * Chunk.SIZE + x;
    return new Tile(this.tileStrip, index);
  }
}

import { DualCoord } from './types';

export function Matrix2d<T>(width: number, height: number, valueFactory: () => T): T[][] {
  const output: T[][] = [];
  for (let y = 0; y < height; y += 1) {
    output[y] = [];
    for (let x = 0; x < width; x += 1) {
      output[y].push(valueFactory());
    }
  }
  return output;
}

export function MinMax(min: number, val: number, max: number): number {
  if (val <= min) return min;
  if (val >= max) return max;
  return val;
}

export function ModRem(value: number, modulus: number): { count: number; remainder: number } {
  let count = 0;
  let remainder = value;
  while (value > modulus) {
    remainder -= modulus;
    count += 1;
  }
  return { count, remainder };
}

export function wrapIndex(index: number, limit: number): number {
  let idx = index;
  while (idx >= limit) {
    idx -= limit;
  }
  while (idx < 0) {
    idx += limit;
  }
  return idx;
}

export function ChunkTile(globalY: number, globalX: number, worldSize: number, chunkSize: number): DualCoord {
  const fullSize = worldSize * chunkSize;
  const gy = wrapIndex(globalY, fullSize);
  const gx = wrapIndex(globalX, fullSize);
  const { count: cy, remainder: ty } = ModRem(gy, chunkSize);
  const { count: cx, remainder: tx } = ModRem(gx, chunkSize);
  return { cy, cx, ty, tx };
}

function minePermutations(mines: number, spaces: number) {
  let safesLeft = spaces - mines;
  let minesLeft = mines;
  let spacesLeft = spaces;
  if (safesLeft < 0 || safesLeft > 8 || mines < 0 || mines > 8) return 0;
  if (safesLeft === 0 || mines === 0) return 1;
  let solutions = 1;
  while (minesLeft > 0 && safesLeft > 0) {
    solutions *= spacesLeft;
    safesLeft -= 1;
    minesLeft -= 1;
    spacesLeft -= 1;
  }
  return solutions;
}

export const minePermutationsTable = (function calcAllMinePerms(maxMines: number, maxSpaces: number): number[][] {
  const allPerms: number[][] = [];
  for (let spaces = 0; spaces <= maxSpaces; spaces += 1) {
    allPerms[spaces] = [];
    for (let mines = 0; mines <= maxMines; mines += 1) {
      allPerms[spaces][mines] = minePermutations(mines, spaces);
    }
  }
  return allPerms;
})(8, 8);

export function calcMineAmbiguity(mines: number, spaces: number): number {
  return minePermutationsTable[spaces][mines];
}

export function calcSucess(reading: number, untested: number) {
  if (untested <= 0 || reading <= 0) return 1;
  if (untested <= reading) return 0;
  return (untested - reading) / untested;
}

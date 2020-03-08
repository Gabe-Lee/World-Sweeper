export type Coordinate = { x: number; y: number };
export type DualCoord = { cy: number; cx: number; ty: number; tx: number };

export enum TileContent {
  MINE = 9,
}

export type SweptTile = {
  x: number;
  y: number;
  reading: number;
  score: number;
};

export type SweepResult = {
  revealedTiles: SweptTile[][];
  explosion: boolean;
  totalScore: number;
};

import { MinMax } from './utils';

type TileDataType = 'READING' | 'FLAGGED' | 'VISIBLE' | 'TERRAIN' | 'CERTAIN' | 'UNTESTED' | 'DENSITY';
type TileDataShift =
  | 'READING_SHIFT'
  | 'FLAGGED_SHIFT'
  | 'VISIBLE_SHIFT'
  | 'TERRAIN_SHIFT'
  | 'CERTAIN_SHIFT'
  | 'UNTESTED_SHIFT'
  | 'DENSITY_SHIFT';
type TileDataMax =
  | 'READING_MAX'
  | 'FLAGGED_MAX'
  | 'VISIBLE_MAX'
  | 'TERRAIN_MAX'
  | 'CERTAIN_MAX'
  | 'UNTESTED_MAX'
  | 'DENSITY_MAX';

export default class Tile {
  static readonly BYTES = 2;

  static readonly VALUE_MAX = 2 ** 16 - 1;

  static readonly READING_MAX = 2 ** 4 - 1;
  static readonly UNTESTED_MAX = 2 ** 4 - 1;
  static readonly FLAGGED_MAX = 2 ** 1 - 1;
  static readonly VISIBLE_MAX = 2 ** 1 - 1;
  static readonly CERTAIN_MAX = 2 ** 1 - 1;
  static readonly TERRAIN_MAX = 2 ** 5 - 1;
  static readonly DENSITY_MAX = 2 ** 7 - 1;

  static readonly READING_SHIFT = 0;
  static readonly UNTESTED_SHIFT = 4;
  static readonly FLAGGED_SHIFT = 8;
  static readonly VISIBLE_SHIFT = 9;
  static readonly CERTAIN_SHIFT = 10;
  static readonly TERRAIN_SHIFT = 11;
  static readonly DENSITY_SHIFT = 0;

  static readonly READING = Tile.READING_MAX << Tile.READING_SHIFT;
  static readonly UNTESTED = Tile.UNTESTED_MAX << Tile.UNTESTED_SHIFT;
  static readonly FLAGGED = Tile.FLAGGED_MAX << Tile.FLAGGED_SHIFT;
  static readonly VISIBLE = Tile.VISIBLE_MAX << Tile.VISIBLE_SHIFT;
  static readonly CERTAIN = Tile.CERTAIN_MAX << Tile.CERTAIN_SHIFT;
  static readonly TERRAIN = Tile.TERRAIN_MAX << Tile.TERRAIN_SHIFT;
  static readonly DENSITY = Tile.DENSITY_MAX << Tile.DENSITY_SHIFT;

  static readonly MINE = 9;

  private _tileStrip: Uint16Array;
  private _index: number;

  constructor(tileStrip: Uint16Array, index: number) {
    this._tileStrip = tileStrip;
    this._index = index;
  }

  get value(): number {
    return this._tileStrip[this._index];
  }
  set value(val) {
    const _val = MinMax(0, val, Tile.VALUE_MAX);
    this._tileStrip[this._index] = _val;
  }

  get reading(): number {
    return this.getSubData('READING');
  }
  set reading(val) {
    this.setSubData('READING', val);
    if (this.reading === this.untested) {
      this.certain = 1;
    } else {
      this.certain = 0;
    }
  }

  get flagged(): number {
    return this.getSubData('FLAGGED');
  }
  set flagged(val) {
    this.setSubData('FLAGGED', val);
  }

  get visible(): number {
    return this.getSubData('VISIBLE');
  }
  set visible(val) {
    this.setSubData('VISIBLE', val);
  }

  get terrain(): number {
    return this.getSubData('TERRAIN');
  }
  set terrain(val) {
    this.setSubData('TERRAIN', val);
  }

  get certain(): number {
    return this.getSubData('CERTAIN');
  }
  set certain(val) {
    this.setSubData('CERTAIN', val);
  }

  get untested(): number {
    return this.getSubData('UNTESTED');
  }
  set untested(val) {
    this.setSubData('UNTESTED', val);
    if (this.reading === this.untested) {
      this.certain = 1;
    } else {
      this.certain = 0;
    }
  }

  get density(): number {
    return this.getSubData('DENSITY');
  }
  set density(val) {
    this.setSubData('DENSITY', val);
  }

  getSubData(type: TileDataType): number {
    return (this.value & Tile[type]) >>> Tile[`${type}_SHIFT` as TileDataShift];
  }
  setSubData(type: TileDataType, val: number): void {
    const _val = MinMax(0, val, Tile[`${type}_MAX` as TileDataMax]);
    const _cleared = this.value & ~Tile[type];
    this.value = (_val << Tile[`${type}_SHIFT` as TileDataShift]) & _cleared;
  }
}

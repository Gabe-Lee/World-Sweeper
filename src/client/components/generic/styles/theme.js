// @ts-check
export const color = {
  FG_1: '#919191',
  FG_2: '#b1b1b1',
  FG_3: '#d1d1d1',
  FG_4: '#e1e1e1',
  FG_5: '#f1f1f1',

  BG_1: '#141511',
  BG_2: '#242521',
  BG_3: '#343531',
  BG_4: '#444541',
  BG_5: '#545551',

  PRI_1: '#2c5e25',
  PRI_2: '#4c7e45',
  PRI_3: '#6c9e65',
  PRI_4: '#8cbe85',
  PRI_5: '#acdea5',

  A4_1: '#711b08',
  A4_2: '#913b17',
  A4_3: '#b15b37',
  A4_4: '#c16b47',
  A4_5: '#d17b57',
};

/**
 * @typedef {keyof theme} Theme
 */

/** @enum {import('csstype').Properties<string>} */
export const theme = {
  standardDarker: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_1 },
  standardDark: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_2 },
  standard: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_3 },
  standardLight: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_4 },

  primaryDarker: { color: color.FG_4, borderColor: color.FG_4, backgroundColor: color.PRI_1 },
  primary: { color: color.FG_4, borderColor: color.FG_4, backgroundColor: color.PRI_3 },
  primaryLighter: { color: color.BG_4, borderColor: color.BG_4, backgroundColor: color.PRI_5 },
};

/** @enum {import('csstype').Properties<string>} */
export const border = {
  pill: { borderRadius: '100000px' },
};
/** @enum {import('csstype').Properties<string>} */
export const shadow = {
  high: { boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.35)' },
  med: { boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.2)' },
  low: { boxShadow: '0px 6px 8px 1px rgba(0,0,0,0.1)' },
};

const easeFast = '0.1s ease-in-out';
/** @enum {import('csstype').Properties<string>} */
export const transitions = {
  color: {
    transition: `background-color ${easeFast}, color ${easeFast}, transform ${easeFast}, box-shadow ${easeFast}`,
  },
};

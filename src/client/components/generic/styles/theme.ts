import { Styles } from 'react-jss';

export const color = {
  FG_1: 'hsl(0, 0%, 60%)',
  FG_2: 'hsl(0, 0%, 70%)',
  FG_3: 'hsl(0, 0%, 80%)',
  FG_4: 'hsl(0, 0%, 90%)',
  FG_5: 'hsl(0, 0%, 100%)',

  BG_1: 'hsl(75, 10%, 5%)',
  BG_2: 'hsl(75, 10%, 13%)',
  BG_3: 'hsl(75, 10%, 20%)',
  BG_4: 'hsl(75, 10%, 27%)',
  BG_5: 'hsl(75, 10%, 35%)',

  PRI_1: 'hsl(113, 30%, 30%)',
  PRI_2: 'hsl(113, 30%, 40%)',
  PRI_3: 'hsl(113, 30%, 50%)',
  PRI_4: 'hsl(113, 30%, 60%)',
  PRI_5: 'hsl(113, 30%, 70%)',

  A4_1: 'hsl(18, 50%, 25%)',
  A4_2: 'hsl(18, 50%, 35%)',
  A4_3: 'hsl(18, 50%, 45%)',
  A4_4: 'hsl(18, 50%, 55%)',
  A4_5: 'hsl(18, 50%, 65%)',
};

export const theme: Record<string, Styles> = {
  inherit: { color: 'inherit', borderColor: 'inherit', backgroundColor: 'inherit' },

  standardDarker: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_1 },
  standardDark: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_2 },
  standard: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_3 },
  standardLight: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_4 },
  standardLighter: { color: color.FG_3, borderColor: color.FG_3, backgroundColor: color.BG_5 },

  primaryDarker: { color: color.FG_4, borderColor: color.FG_4, backgroundColor: color.PRI_1 },
  primary: { color: color.FG_4, borderColor: color.FG_4, backgroundColor: color.PRI_3 },
  primaryLighter: { color: color.BG_4, borderColor: color.BG_4, backgroundColor: color.PRI_5 },
};

export const border: Record<string, Styles> = {
  pill: { borderRadius: '100000px' },
};

export const shadow: Record<string, Styles> = {
  none: { boxShadow: 'none' },
  low: { boxShadow: '0px 1px 3px -1px rgba(0,0,0,0.35)' },
  med: { boxShadow: '0px 6px 4px -2px rgba(0,0,0,0.2)' },
  high: { boxShadow: '0px 6px 5px 1px rgba(0,0,0,0.1)' },
  medUp: { boxShadow: '0px -2px 4px -2px rgba(0,0,0,0.2)' },
  medAll: { boxShadow: '0px 0px 4px -1px rgba(0,0,0,0.2)' },
};

const easeFast = '0.1s ease-in-out';

export const transitions: Record<string, Styles> = {
  color: {
    transition: `background-color ${easeFast}, color ${easeFast}, transform ${easeFast}, box-shadow ${easeFast}`,
  },
};

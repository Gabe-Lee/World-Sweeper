export type TSizeValues = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TColorsStandard = 'standard' | 'standard-light' | 'standard-lighter' | 'standard-dark' | 'standard-darker';
type TColorsPrime = 'prime' | 'prime-light' | 'prime-lighter' | 'prime-dark' | 'prime-darker';
type TColorsAccent = 'accent' | 'accent-light' | 'accent-lighter' | 'accent-dark' | 'accent-darker';
type TColorsAlter = 'alter' | 'alter-light' | 'alter-lighter' | 'alter-dark' | 'alter-darker';
type TColorsAltAccent =
  | 'alt-accent'
  | 'alt-accent-light'
  | 'alt-accent-lighter'
  | 'alt-accent-dark'
  | 'alt-accent-darker';
export type TColors = TColorsStandard | TColorsPrime | TColorsAccent | TColorsAlter | TColorsAltAccent;

export type TTheme = {
  colors?: TColors;
  border?: TSizeValues | 'none';
  rounded?: TSizeValues | 'pill';
  padding?: TSizeValues;
  lift?: boolean;
};

export const processThemeClasses: (props: TTheme) => string = ({ colors, border, rounded, padding, lift }) => {
  const _colors = colors ? `color-${colors}` : undefined;
  const _border = border ? `bord-${border}` : undefined;
  const _rounded = rounded ? `round-${rounded}` : undefined;
  const _padding = padding ? `pad-${padding}` : undefined;
  const _lift = lift ? 'lift' : undefined;
  return [_colors, _border, _rounded, _padding, _lift].join(' ');
};

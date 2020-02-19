import { joinClasses } from '../../../utils';

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

type TLift = 'none' | 'shadow' | 'raise' | 'raise-depress' | 'shadow-depress';
type TFontSize = TSizeValues | '2x' | '2-5x' | '3x';

export type TTheme = {
  colors?: TColors;
  border?: TSizeValues | 'none';
  rounded?: TSizeValues | 'pill';
  padding?: TSizeValues;
  lift?: TLift;
  fontSize?: TFontSize;
};

export const processThemeClasses: (props: TTheme) => string = ({
  colors,
  border,
  rounded,
  padding,
  lift,
  fontSize,
}) => {
  const _colors = colors ? `color-${colors}` : '';
  const _border = border ? `bord-${border}` : '';
  const _rounded = rounded ? `round-${rounded}` : '';
  const _padding = padding ? `pad-${padding}` : '';
  const _lift = lift ? `lift-${lift}` : '';
  const _fontSize = fontSize ? `font-${fontSize}` : '';
  return joinClasses(_colors, _border, _rounded, _padding, _lift, _fontSize);
};

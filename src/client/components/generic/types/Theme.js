// @ts-check
/**
 * @module
 */
import joinClasses from './Intrinsic';

/**
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl'} TSizeValues
 * @typedef {'standard' | 'standard-light' | 'standard-lighter' | 'standard-dark' | 'standard-darker'} TColorsStandard
 * @typedef {'prime' | 'prime-light' | 'prime-lighter' | 'prime-dark' | 'prime-darker'} TColorsPrime
 * @typedef {'accent' | 'accent-light' | 'accent-lighter' | 'accent-dark' | 'accent-darker'} TColorsAccent
 * @typedef {'alter' | 'alter-light' | 'alter-lighter' | 'alter-dark' | 'alter-darker'} TColorsAlter
 * @typedef {'alt-accent' | 'alt-accent-light' | 'alt-accent-lighter' | 'alt-accent-dark' | 'alt-accent-darker'} TColorsAltAccent
 * @typedef {TColorsStandard | TColorsPrime | TColorsAccent | TColorsAlter | TColorsAltAccent} TColors
 * @typedef {'none' | 'shadow' | 'raise' | 'raise-depress' | 'shadow-depress'} TLift
 * @typedef {TSizeValues | '2x' | '2-5x' | '3x'} TFontSize
 * @typedef {{colors?: TColors, border?: TSizeValues | 'none', rounded?: TSizeValues | 'pill', padding?: TSizeValues, lift?: TLift, fontSize?: TFontSize}} TTheme
 */

/**
 * Parses Theme properties into a string of css class names
 * @param {TTheme} props
 * @returns {string} string
 */
const processThemeClasses = ({ colors, border, rounded, padding, lift, fontSize }) => {
  const _colors = colors ? `color-${colors}` : '';
  const _border = border ? `bord-${border}` : '';
  const _rounded = rounded ? `round-${rounded}` : '';
  const _padding = padding ? `pad-${padding}` : '';
  const _lift = lift ? `lift-${lift}` : '';
  const _fontSize = fontSize ? `font-${fontSize}` : '';
  return joinClasses(_colors, _border, _rounded, _padding, _lift, _fontSize);
};
export default processThemeClasses;

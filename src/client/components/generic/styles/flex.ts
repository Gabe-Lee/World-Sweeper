import { cloneElement, Children } from 'react';
import { Styles } from 'react-jss';
import cascade from './cascade';

// @ts-check
export const screens = {
  xs: '0px',
  sm: '420px',
  md: '640px',
  lg: '1024px',
  xl: '1400px',
  ul: '2048px',
};

export const screensSimple = {
  phone: '0px',
  tablet: '500px',
  desktop: '800px',
};

export const device = {
  landscape: '@media only screen and (orientation: landscape)',
  portrait: '@media only screen and (orientation: portrait)',

  phone: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.phone}), only screen and (orientation: portrait) and (min-width: ${screensSimple.phone})`,
  phoneLand: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.phone})`,
  phonePort: `@media only screen and (orientation: portrait) and (min-width: ${screensSimple.phone})`,

  tablet: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.tablet}), only screen and (orientation: portrait) and (min-width: ${screensSimple.tablet})`,
  tabletLand: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.tablet})`,
  tabletPort: `@media only screen and (orientation: portrait) and (min-width: ${screensSimple.tablet})`,

  desktop: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.desktop}), only screen and (orientation: portrait) and (min-width: ${screensSimple.desktop})`,
  desktopLand: `@media only screen and (orientation: landscape) and (min-height: ${screensSimple.desktop})`,
  desktopPort: `@media only screen and (orientation: portrait) and (min-width: ${screensSimple.desktop})`,
};

export const orientations = {
  port: 'portrait',
  land: 'landscape',
};

/** @typedef {'landscape' | 'portrait'} Orientation */

/**
 * @typedef {{size: string, styles: import('csstype').Properties}} Mode
 * @typedef {Mode[] | Mode} FlexModes
 */
/**
 *
 * @param {FlexModes} modes
 * @returns {import('csstype').Properties}
 */

/** @enum {import('csstype').Properties<string>} */
export const flex = {
  default: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    flex: '0 0 auto',
    alignSelf: 'center',
  },
  hide: { display: 'none', flex: '0 0 0px' },
  min: { display: 'flex', flex: '0 0 auto' },
  fill: { display: 'flex', flex: '1 1 auto' },
  relative(value): Styles {
    return {
      display: 'flex',
      flex: `${value} ${value} auto`,
    };
  },
  absolute(value, parentGap = '0px'): Styles {
    if (value === 0) return { flex: '0 0 0px', display: 'none' };
    return {
      flex: `0 0 calc(${1 / value}% - ${parentGap})`,
    };
  },
  percent(value, parentGap = '0px'): Styles {
    return {
      flex: `1 1 calc(${value}% - ${parentGap})`,
    };
  },
  gap(value): Styles {
    return {
      padding: value,
      '& > *': {
        margin: value,
      },
    };
  },
};

import { cloneElement, Children } from 'react';
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
 *
 * @param {import('csstype').Properties} styles
 * @param {{minWidth?: string, minHeight?: string, orientation?: Orientation}} constraints
 * @returns {import('csstype').Properties} CSS Properties nested in media query
 */
export function createResponsiveStyles(styles, constraints) {
  const _minWidth = screens[constraints.minWidth] || constraints.minWidth;
  const _minHeight = screens[constraints.minHeight] || constraints.minHeight;
  const _widthQuery = _minWidth ? ` (min-width: ${_minWidth})` : '';
  const _heightQuery = _minHeight ? `${_widthQuery ? ' and' : ''} (min-height: ${_minHeight})` : '';
  const _orientQuery = constraints.orientation
    ? `${_widthQuery || _heightQuery ? ' and' : ''} (orientation: ${constraints.orientation})`
    : '';
  return {
    [`@media${_widthQuery}${_heightQuery}${_orientQuery}`]: {
      ...styles,
    },
  };
}

/**
 *
 * @param {string} tag
 * @param {import('csstype').Properties} styles
 */
export function parseResponsiveTags(tag, styles) {
  const parts = tag.split('-');
  const constraints = {};
  if (screens[parts[0]] !== undefined) {
    constraints.minWidth = screens[parts[0]];
  } else if (orientations[parts[0]] !== undefined) {
    constraints.orientation = orientations[parts[0]];
  }
  if (screens[parts[1]] !== undefined) {
    if (constraints.minWidth === undefined) {
      constraints.minWidth = screens[parts[1]];
    } else {
      constraints.minHeight = screens[parts[1]];
    }
  } else if (orientations[parts[1]] !== undefined) {
    constraints.orientation = orientations[parts[1]];
  }
  if (screens[parts[2]] !== undefined) {
    if (constraints.minWidth === undefined) {
      constraints.minWidth = screens[parts[2]];
    } else {
      constraints.minHeight = screens[parts[2]];
    }
  } else if (orientations[parts[2]] !== undefined) {
    constraints.orientation = orientations[parts[2]];
  }
  return createResponsiveStyles(styles, constraints);
}

/**
 * Creates flex property based on percentage of main axis
 * @param {number} value
 * @param {string} parentGap
 * @returns {import('csstype').Properties}
 */
export function percent(value, parentGap = '0px') {
  return {
    flex: `1 1 calc(${value}% - ${parentGap})`,
  };
}
/**
 * Creates flex property based on relative fraction of main axis
 * @param {number} value
 * @returns {import('csstype').Properties}
 */
export function relative(value) {
  return {
    flex: `${value} ${value} auto`,
  };
}
/**
 * Creates flex property based on absolute fraction of main axis
 * @param {number} value
 * @param {string} parentGap
 * @returns {import('csstype').Properties}
 */
export function absolute(value, parentGap = '0px') {
  if (value === 0) return { flex: '0 0 0px', display: 'none' };
  return {
    flex: `0 0 calc(${1 / value}% - ${parentGap})`,
  };
}

/**
 * @typedef {{size: string, styles: import('csstype').Properties}} Mode
 * @typedef {Mode[] | Mode} FlexModes
 */
/**
 *
 * @param {FlexModes} modes
 * @returns {import('csstype').Properties}
 */

export function parseFlex(modes) {
  if (!Array.isArray(modes)) return parseResponsiveTags(modes.size, modes.styles);
  const modeLim = modes.length;
  const flexStyles = [];
  for (let i = 0; i < modeLim; i += 1) {
    flexStyles.push(parseResponsiveTags(modes[i].size, modes[i].styles));
  }
  return cascade(...flexStyles);
}

export function gappedChildren(gap, children) {
  if (gap === undefined) return children;
  return Children.toArray(children).map(child => cloneElement(child, { gap }));
}

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
  relative(value) {
    return {
      display: 'flex',
      flex: `${value} ${value} auto`,
    };
  },
  absolute(value, parentGap = '0px') {
    if (value === 0) return { flex: '0 0 0px', display: 'none' };
    return {
      flex: `0 0 calc(${1 / value}% - ${parentGap})`,
    };
  },
  percent(value, parentGap = '0px') {
    return {
      flex: `1 1 calc(${value}% - ${parentGap})`,
    };
  },
  gap(value) {
    return {
      padding: value,
      // @ts-ignore
      '& > *': {
        margin: value,
      },
    };
  },
};

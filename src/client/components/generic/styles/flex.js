import { cloneElement, Children } from 'react';

// @ts-check
export const screens = {
  xs: '0px',
  sm: '420px',
  md: '640px',
  lg: '1024px',
  xl: '1400px',
  ul: '2048px',
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
  let flexStyles = {};
  for (let i = 0; i < modeLim; i += 1) {
    flexStyles = { ...flexStyles, ...parseResponsiveTags(modes[i].size, modes[i].styles) };
  }
  return flexStyles;
}

export function gappedChildren(gap, children) {
  if (gap === undefined) return children;
  return Children.toArray(children).map(child => cloneElement(child, { gap }));
}

/** @type {import('csstype').Properties} */
export const flexDefault = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
  flex: '0 0 auto',
  alignSelf: 'stretch',
  padding: '0',
  margin: '0',
};

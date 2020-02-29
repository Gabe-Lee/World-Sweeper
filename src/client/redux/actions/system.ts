// @ts-check
/**
 * @typedef {import('../reducers/system.js').SystemState} SystemState
 */

/** @typedef {'SET_CLIENT_LOADED'} SET_CLIENT_LOADED */
export const SET_CLIENT_LOADED = 'SET_CLIENT_LOADED';
/**
 * @typedef {{type: SET_CLIENT_LOADED, clientLoaded: boolean}} SetClientLoaded
 * @param {SystemState["clientLoaded"]} clientLoaded
 * @returns {SetClientLoaded}
 */
export function setClientLoaded(clientLoaded) {
  return {
    type: SET_CLIENT_LOADED,
    clientLoaded,
  };
}

/** @typedef {'SET_WINDOW_SIZE'} SET_WINDOW_SIZE */
export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
/**
 * @typedef {{type: SET_WINDOW_SIZE, window: {width: number, height: number, orientation: import('../../components/generic/styles/flex').Orientation}}} SetWindowSize
 * @param {number} width
 * @param {number} height
 * @returns {SetWindowSize}
 */
export function setWindowSize(width, height) {
  const orientation = width >= height ? 'landscape' : 'portrait';
  return {
    type: SET_WINDOW_SIZE,
    window: {
      width,
      height,
      orientation,
    },
  };
}

/**
 * @typedef {SetClientLoaded | SetWindowSize} SystemActions
 */

// @ts-check
import { SET_CLIENT_LOADED, SET_WINDOW_SIZE } from '../actions/system';

/**
 * @typedef {Object} ClientSettings
 * @property {'light' | 'dark'} theme
 */

/**
 * @typedef {Object} SystemState
 * @property {boolean} clientLoaded
 * @property {string} clientVersion
 * @property {string} sessionUuid
 * @property {ClientSettings} clientSettings
 * @property {{height: number, width: number, orientation: import('../../components/generic/styles/flex.js').Orientation}} window
 */

/** @type {SystemState} */
const initialState = {
  clientLoaded: false,
  clientVersion: '0.0',
  sessionUuid: 'none',
  clientSettings: {
    theme: 'dark',
  },
  window: {
    width: 640,
    height: 480,
    orientation: 'landscape',
  },
};

/**
 * System Reducer
 * @param {SystemState} state
 * @param {import('../actions/system').SystemActions} action
 * @returns {SystemState} SystemState
 */
const system = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENT_LOADED:
      return { ...state, clientLoaded: action.clientLoaded };
    case SET_WINDOW_SIZE:
      return { ...state, ...action.window };
    default:
      return state;
  }
};
export default system;

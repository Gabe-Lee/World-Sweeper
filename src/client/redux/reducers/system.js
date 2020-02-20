// @ts-check
import { SystemTypes } from '../actions/system';

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
 */

/** @type {SystemState} */
const initialState = {
  clientLoaded: false,
  clientVersion: '0.0',
  sessionUuid: 'none',
  clientSettings: {
    theme: 'dark',
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
    case SystemTypes.SET_CLIENT_LOADED:
      return { ...state, clientLoaded: action.clientLoaded };
    default:
      return state;
  }
};
export default system;

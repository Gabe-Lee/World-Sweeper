// @ts-check
/**
 * @typedef {import('../reducers/system.js').SystemState} SystemState
 */

/** @enum {string} */
export const SystemTypes = {
  SET_CLIENT_LOADED: 'SET_CLIENT_LOADED',
};

/**
 * @typedef {{type: string, clientLoaded: boolean}} SetClientLoaded
 * @param {SystemState["clientLoaded"]} clientLoaded
 * @returns {SetClientLoaded}
 */
export function setClientLoaded(clientLoaded) {
  return {
    type: SystemTypes.SET_CLIENT_LOADED,
    clientLoaded,
  };
}

/**
 * @typedef {SetClientLoaded} SystemActions
 */

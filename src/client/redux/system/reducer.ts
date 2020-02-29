import { SystemState, SYSTEM, Actions } from './types';

const initialState: SystemState = {
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

export default function system(state = initialState, action: Actions): SystemState {
  switch (action.type) {
    case SYSTEM.SET_CLIENT_LOADED:
      return { ...state, clientLoaded: action.clientLoaded };
    case SYSTEM.SET_WINDOW_SIZE:
      return { ...state, ...action.window };
    default:
      return state;
  }
}

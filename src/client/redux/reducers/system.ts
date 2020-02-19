import { SystemState, SystemTypes, SystemActions } from '../actions/system';

const initialState: SystemState = {
  clientLoaded: false,
  clientVersion: '0.0',
  sessionUuid: 'none',
  clientSettings: {
    theme: 'dark',
  },
};

export default function system(state = initialState, action: SystemActions): SystemState {
  switch (action.type) {
    case SystemTypes.SET_CLIENT_LOADED:
      return { ...state, clientLoaded: action.clientLoaded };
    default:
      return state;
  }
}

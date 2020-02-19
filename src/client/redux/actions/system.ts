export interface SystemState {
  clientLoaded: boolean;
  clientVersion: string;
  sessionUuid: string;
  clientSettings: {
    theme: 'light' | 'dark';
  };
}

export enum SystemTypes {
  SET_CLIENT_LOADED,
}

interface GenericAction {
  type: SystemTypes;
}

interface SetClientLoaded {
  type: typeof SystemTypes.SET_CLIENT_LOADED;
  clientLoaded: boolean;
}
export function setClientLoaded(clientLoaded: boolean): SetClientLoaded {
  return {
    type: SystemTypes.SET_CLIENT_LOADED,
    clientLoaded,
  };
}

export type SystemActions = SetClientLoaded;

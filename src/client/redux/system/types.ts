// State
export interface ClientSettings {
  theme: 'dark' | 'light';
}

export interface Window {
  height: number;
  width: number;
  orientation: 'landscape' | 'portrait';
}

export interface SystemState {
  clientLoaded: boolean;
  clientVersion: string;
  sessionUuid: string;
  clientSettings: ClientSettings;
  window: Window;
}

// Action Types
export enum SYSTEM {
  SET_CLIENT_LOADED,
  SET_WINDOW_SIZE,
}

// Action Payloads
export interface SetClientLoaded {
  type: typeof SYSTEM['SET_CLIENT_LOADED'];
  clientLoaded: SystemState['clientLoaded'];
}

export interface SetWindowSize {
  type: typeof SYSTEM['SET_WINDOW_SIZE'];
  window: SystemState['window'];
}

export type Actions = SetClientLoaded | SetWindowSize;

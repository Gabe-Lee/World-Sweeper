import { SetClientLoaded, SetWindowSize, SYSTEM } from './types';

export function setClientLoaded(clientLoaded: SetClientLoaded['clientLoaded']): SetClientLoaded {
  return {
    type: SYSTEM.SET_CLIENT_LOADED,
    clientLoaded,
  };
}

export function setWindowSize(
  width: SetWindowSize['window']['width'],
  height: SetWindowSize['window']['height'],
): SetWindowSize {
  const orientation: SetWindowSize['window']['orientation'] = width >= height ? 'landscape' : 'portrait';
  return {
    type: SYSTEM.SET_WINDOW_SIZE,
    window: {
      width,
      height,
      orientation,
    },
  };
}

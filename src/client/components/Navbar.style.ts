import { theme, shadow, border } from './generic/styles/theme';
import { flex, device } from './generic/styles/flex';
import cascade from './generic/styles/cascade';

/** @type {import('csstype').Properties} */
export const navbarCss = cascade(theme.standardLight, shadow.medAll, flex.gap('0.25rem'), {
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  borderRadius: '0px',
  fontSize: '1.5rem',
  position: 'absolute',
  zIndex: 100,
  transition: 'transform ease-in-out 0.2s',
  [device.landscape]: {
    left: '0px',
    transform: 'translateX(-100%)',
    height: '100vh',
    flexDirection: 'column',
    '&.open': { transform: 'translateX(0%)' },
  },
  [device.portrait]: {
    width: '100vw',
    top: '0px',
    transform: 'translateY(-100%)',
    flexDirection: 'row',
    '&.open': { transform: 'translateY(0%)' },
  },
});

/** @type {import('csstype').Properties} */
export const navButtonCss = cascade(theme.standardLighter, border.pill, flex.min, {
  alignSelf: 'stretch',
  [device.phone]: cascade(flex.gap('0.35rem'), {
    fontSize: '1.8rem',
  }),
  [device.tablet]: cascade(flex.gap('0.3rem'), {
    fontSize: '1.65rem',
  }),
  [device.desktop]: cascade(flex.gap('0.25rem'), {
    fontSize: '1.5rem',
  }),
});

/** @type {import('csstype').Properties} */
export const navMenuBtnCss = cascade(navButtonCss, {
  position: 'relative',
  transition: 'transform ease-in-out 0.2s',
  [device.portrait]: {
    transform: 'translateY(calc(100% + 1rem))',
    '&.open': {
      transform: 'translateY(0%)',
    },
  },
  [device.landscape]: {
    transform: 'translateX(calc(100% + 1rem))',
    '&.open': {
      transform: 'translateX(0%)',
    },
  },
});

export const navBtnTextCss = {
  [device.phone]: flex.hide,
  [device.desktop]: flex.min,
};

export const navTitleCss = cascade(flex.gap('0.25rem'), {
  textAlign: 'center',
  alignContent: 'flex-start',
  overflow: 'hidden',
  [device.landscape]: {
    maxWidth: '10rem',
  },
  [device.phone]: flex.hide,
  [device.tablet]: flex.fill,
  [device.tabletLand]: {
    writingMode: 'vertical-lr',
    textOrientation: 'upright',
    letterSpacing: '-0.2rem',
  },
  [device.desktop]: {
    letterSpacing: 'unset',
    flexWrap: 'wrap',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [device.desktopLand]: {
    writingMode: 'unset',
    textOrientation: 'unset',
  },
});

/** @type {import('csstype').Properties} */
export const navModalCss = {
  position: 'fixed',
  backgroundColor: 'rgba(0,0,0,0)',
  cursor: 'default',
  zIndex: 90,
  width: '100vw',
  height: '100vh',
  left: '0px',
  top: '0px',
};

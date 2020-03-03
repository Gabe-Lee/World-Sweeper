import { Styles } from 'react-jss';
import { theme, shadow, border, color } from './generic/styles/theme';
import { flex, device } from './generic/styles/flex';
import { cascade } from './generic/styles/utils';

export const gameClientCss: Styles = cascade({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  justifyContent: 'center',
  alignContent: 'center',
});

export const gameButtonCss: Styles = cascade(theme.transparent, shadow.image, {
  position: 'fixed',
  boxShadow: 'unset',
  borderRadius: '100000px',
  fontSize: '3rem',
  padding: '0.25rem',
});

export const flagButtonCss: Styles = cascade(gameButtonCss, {
  color: color.WARNING,
  borderColor: 'unset',
  border: `0.25rem solid ${color.WARNING}`,
  right: '1rem',
  bottom: '5rem',
  '& > *': {
    border: 'unset',
  },
});

export const sweepButtonCss: Styles = cascade(gameButtonCss, {
  color: color.SAFETY,
  borderColor: 'unset',
  border: `0.25rem solid ${color.SAFETY}`,
  right: '5rem',
  bottom: '1rem',
  '& > *': {
    border: 'unset',
  },
});

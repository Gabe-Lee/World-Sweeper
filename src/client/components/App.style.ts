import { Styles } from 'react-jss';
import { cascade } from './generic/styles/utils';
import { flex } from './generic/styles/flex';
import { theme } from './generic/styles/theme';

export const main: Styles = cascade(flex.default, theme.standard, {
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
});

export const body: Record<string, Styles> = {
  body: cascade(theme.standardDarker, {
    fontFamily: 'Roboto',
  }),
};

export const normalize: Styles = {
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  // Settings borrowed from above
  '*, *::after, *::before': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
    lineHeight: '1',
  },
  body: {
    margin: '0px',
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },
  hr: {
    boxSizing: 'content-box',
    height: '0px',
    overflow: 'visible',
  },
  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  a: {
    backgroundColor: 'transparent',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'code, kbd, samp': {
    fontFamily: 'monospace, monospace' /* 1 */,
    fontSize: '1em' /* 2 */,
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1',
    margin: '0',
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
    borderStyle: 'none',
    padding: '0',
  },
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },
  fieldset: {
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: '0',
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
  },
  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none',
  },
};

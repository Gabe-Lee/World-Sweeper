// @ts-check
import React from 'react';
import { createUseStyles } from 'react-jss';

import cascade from './styles/cascade';
import { theme } from './styles/theme';
import { flex } from './styles/flex';

const makeStyle = (name, css) =>
  createUseStyles({
    [name]: cascade(
      theme.inherit,
      // @ts-ignore
      flex.default,
      {
        borderRadius: '0.5rem',
        border: 'none',
      },
      css,
    ),
  });

/**
 * Surface component
 *
 * Used as a generic div container component
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').TJSSElement & import('./types/Intrinsic').TDiv} props
 */
export default function Surface({ name = 'Surface', addClass = '', css = {}, children, ...div }) {
  const style = makeStyle(name, css)();
  return (
    <div {...div} className={`${style[name]} ${addClass}`}>
      {children}
    </div>
  );
}

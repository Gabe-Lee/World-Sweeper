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
        borderRadius: '0rem',
        border: 'none',
      },
      css,
    ),
  });

/**
 * Text component
 *
 * Uses HTML5 <article> under the hood for semantics
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').HTML5Element & import('./types/Intrinsic').TJSSElement} props
 */
export default function Text({ name = 'Text', addClass = '', css = {}, children, ...section }) {
  const style = makeStyle(name, css)();
  return (
    <article {...section} className={`${style[name]} ${addClass}`}>
      {children}
    </article>
  );
}

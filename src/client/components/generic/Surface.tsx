// @ts-check
import React from 'react';
import { createUseStyles, Styles } from 'react-jss';

import cascade from './styles/cascade';
import { theme } from './styles/theme';
import { flex } from './styles/flex';

function makeStyles(name: string, css: Styles): ReturnType<typeof createUseStyles> {
  return createUseStyles({
    [name]: cascade(
      theme.inherit,
      flex.default,
      {
        borderRadius: '0.5rem',
        border: 'none',
      },
      css,
    ),
  });
}

/**
 * Surface component
 *
 * Used as a generic div container component
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').TJSSElement & import('./types/Intrinsic').TDiv} props
 */
export default function Surface({ name = 'Surface', addClass = '', css = {}, children, ...div }): JSX.Element {
  const style = makeStyles(name, css)();
  return (
    <div {...div} className={`${style[name]} ${addClass}`}>
      {children}
    </div>
  );
}

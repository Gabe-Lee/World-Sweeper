import React from 'react';
import { createUseStyles, Styles } from 'react-jss';

import { cascade } from './styles/utils';
import { theme } from './styles/theme';
import { flex } from './styles/flex';
import { JSSProps, HTML5Props } from './types/intrinsic';

function makeStyles(name: string, css: Styles): ReturnType<typeof createUseStyles> {
  return createUseStyles({
    [name]: cascade(
      theme.inherit,
      flex.default,
      {
        borderRadius: '0rem',
        border: 'none',
      },
      css,
    ),
  });
}

export default function Text({
  name = 'Text',
  addClass = '',
  css = {},
  children,
  ...section
}: JSSProps & HTML5Props): JSX.Element {
  const style = makeStyles(name, css)();
  return (
    <article {...section} className={`${style[name]} ${addClass}`}>
      {children}
    </article>
  );
}

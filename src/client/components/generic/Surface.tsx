import React from 'react';
import { createUseStyles, Styles } from 'react-jss';

import { cascade } from './styles/utils';
import { theme } from './styles/theme';
import { flex } from './styles/flex';
import { JSSProps, DivProps } from './types/intrinsic';

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

export default function Surface({
  name = 'Surface',
  addClass = '',
  css = {},
  children,
  ...div
}: JSSProps & DivProps): JSX.Element {
  const style = makeStyles(name, css)();
  return (
    <div {...div} className={`${style[name]} ${addClass}`}>
      {children}
    </div>
  );
}

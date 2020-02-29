import React from 'react';
import { createUseStyles, Styles } from 'react-jss';

import { cascade } from './styles/utils';
import { theme, shadow } from './styles/theme';
import { flex } from './styles/flex';
import { JSSProps, ButtonProps } from './types/intrinsic';

function makeStyles(name: string, css: Styles): ReturnType<typeof createUseStyles> {
  return createUseStyles({
    [name]: cascade(
      theme.inherit,
      flex.default,
      shadow.med,
      {
        borderRadius: '0.5rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
      },
      css,
    ),
  });
}

export default function Button({
  name = 'Button',
  addClass = '',
  css = {},
  children = [],
  ...button
}: JSSProps & ButtonProps): JSX.Element {
  const style = makeStyles(name, css)();
  return (
    <button type="button" {...button} className={`${style[name]} ${addClass}`}>
      {children}
    </button>
  );
}

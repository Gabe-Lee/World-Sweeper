import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles, Styles } from 'react-jss';

import { cascade } from './styles/utils';
import { theme } from './styles/theme';
import { flex } from './styles/flex';
import { JSSProps, IconProps } from './types/intrinsic';

function makeStyles(name: string, css: Styles): ReturnType<typeof createUseStyles> {
  return createUseStyles({
    [name]: cascade(
      theme.inherit,
      flex.default,
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      css,
    ),
  });
}

export default function Icon({
  name = 'Icon',
  addClass = '',
  css = {},
  icon,
  ...otherProps
}: JSSProps & IconProps): JSX.Element {
  const style = makeStyles(name, css)();
  return <FontAwesomeIcon icon={icon} {...otherProps} className={`${style[name]} ${addClass}`} />;
}

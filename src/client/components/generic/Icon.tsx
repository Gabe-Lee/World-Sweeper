// @ts-check
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      css,
    ),
  });
}

/**
 * Icon component
 *
 * Acts as a wrapper for <FontAwesomeIcon>
 * Is both a flex container and flex member
 * @param {import('@fortawesome/react-fontawesome').FontAwesomeIconProps & import('./types/Intrinsic').TJSSElement} props
 */
export default function Icon({ name = 'Icon', addClass = '', css = {}, icon, ...otherProps }): JSX.Element {
  const style = makeStyles(name, css)();
  return <FontAwesomeIcon icon={icon} {...otherProps} className={`${style[name]} ${addClass}`} />;
}

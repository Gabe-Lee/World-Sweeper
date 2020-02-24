// @ts-check
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      css,
    ),
  });

/**
 * Icon component
 *
 * Acts as a wrapper for <FontAwesomeIcon>
 * Is both a flex container and flex member
 * @param {import('@fortawesome/react-fontawesome').FontAwesomeIconProps & import('./types/Intrinsic').TJSSElement} props
 */
export default function Icon({ name = 'Icon', addClass = '', css = {}, ...icon }) {
  const style = makeStyle(name, css)();
  return <FontAwesomeIcon {...icon} className={`${style[name]} ${addClass}`} />;
}

// @ts-check
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createUseStyles } from 'react-jss';

import { theme } from './styles/theme';
import { parseFlex, flexDefault } from './styles/flex';

/**
 * Icon component
 *
 * Acts as a wrapper for <FontAwesomeIcon>
 * Is both a flex container and flex member
 * @param {import('@fortawesome/react-fontawesome').FontAwesomeIconProps & import('./types/Intrinsic').TJSSElement} props
 */
export default function Icon({ className = 'Icon', addClass = '', gap = '0', css = {}, flex = [], ...icon }) {
  const flexStyles = parseFlex(flex);
  const style = createUseStyles({
    [className]: {
      ...theme.standard,
      ...flexDefault,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: gap,
      // @ts-ignore
      '& > *': {
        margin: gap,
      },
      ...css,
      ...flexStyles,
    },
  })();
  return <FontAwesomeIcon {...icon} className={style[className].concat(` ${addClass}`)} />;
}

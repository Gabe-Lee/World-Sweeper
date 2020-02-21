// @ts-check
import React from 'react';

import { theme } from './styles/theme';
import createStyles from './styles/create';
import { parseFlex, flexDefault } from './styles/flex';

/**
 * Button component
 *
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic.js').TButton & import('./types/Intrinsic').TJSSElement} props
 */
const Button = ({ className = 'Button', addClass = '', gap = '0', css = {}, flex = [], children, ...button }) => {
  const flexStyles = parseFlex(flex);
  const style = createStyles({
    [className]: {
      ...theme.standard,
      ...flexDefault,
      borderRadius: '0.5rem',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      padding: gap,
      // @ts-ignore
      '& > *': {
        margin: gap,
      },
      ...css,
      ...flexStyles,
    },
  })();
  return (
    <button type="button" {...button} className={style[className].concat(` ${addClass}`)}>
      {children}
    </button>
  );
};
export default Button;

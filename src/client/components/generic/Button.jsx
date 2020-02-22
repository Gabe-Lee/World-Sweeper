// @ts-check
import React from 'react';
import { createUseStyles } from 'react-jss';
import cascade from './styles/cascade';

import { theme, shadow } from './styles/theme';
import { parseFlex, flexDefault } from './styles/flex';

const makeStyle = ({ gap, css, flexStyles, className }) =>
  createUseStyles({
    [className]: cascade(
      theme.standard,
      flexDefault,
      shadow.med,
      {
        borderRadius: '0.5rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: gap,
        // @ts-ignore
        '& > *': {
          margin: gap,
        },
      },
      css,
      flexStyles,
    ),
  })();

/**
 * Button component
 *
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic.js').TButton & import('./types/Intrinsic').TJSSElement} props
 */
const Button = ({ className = 'Button', addClass = '', gap = '0', css = {}, flex = [], children, ...button }) => {
  const flexStyles = parseFlex(flex);
  const style = makeStyle({ gap, className, css, flexStyles });
  return (
    <button type="button" {...button} className={style[className].concat(` ${addClass}`)}>
      {children}
    </button>
  );
};
export default Button;

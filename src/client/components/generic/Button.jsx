// @ts-check
import React from 'react';
import { createUseStyles } from 'react-jss';

import cascade from './styles/cascade';
import { theme, shadow } from './styles/theme';
import { flex } from './styles/flex';

const makeStyles = (name, css) =>
  createUseStyles({
    [name]: cascade(
      theme.inherit,
      // @ts-ignore
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

/**
 * Button component
 *
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').TButton & import('./types/Intrinsic').TJSSElement} props
 */
const Button = ({ name = 'Button', addClass = '', css = {}, children, ...button }) => {
  const style = makeStyles(name, css)();
  return (
    <button type="button" {...button} className={`${style[name]} ${addClass}`}>
      {children}
    </button>
  );
};
export default Button;

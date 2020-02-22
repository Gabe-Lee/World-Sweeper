// @ts-check
import React from 'react';
import { createUseStyles } from 'react-jss';
import cascade from './styles/cascade';
import { theme } from './styles/theme';
import { parseFlex, flexDefault } from './styles/flex';

const makeStyle = ({ gap, css, flexStyles, className }) =>
  createUseStyles({
    [className]: cascade(
      theme.standard,
      flexDefault,
      {
        borderRadius: '0rem',
        border: 'none',
        display: 'flex',
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
 * Text component
 *
 * Uses HTML5 <article> under the hood for semantics
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').HTML5Element & import('./types/Intrinsic').TJSSElement} props
 */
export default function Text({
  className = 'Text',
  addClass = '',
  gap = '0',
  css = {},
  flex = [],
  children,
  ...section
}) {
  const flexStyles = parseFlex(flex);
  const style = makeStyle({ gap, css, flexStyles, className });
  return (
    <article {...section} className={style[className].concat(` ${addClass}`)}>
      {children}
    </article>
  );
}

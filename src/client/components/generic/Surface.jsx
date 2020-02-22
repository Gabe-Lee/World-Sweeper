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
        borderRadius: '0.5rem',
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
 * Surface component
 *
 * Used as a generic div container component
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').TJSSElement & import('./types/Intrinsic').TDiv} props
 */
export default function Surface({
  className = 'Surface',
  addClass = '',
  gap = '0',
  css = {},
  flex = [],
  children,
  ...div
}) {
  const flexStyles = parseFlex(flex);
  const style = makeStyle({ gap, css, flexStyles, className });
  return (
    <div {...div} style={{}} className={style[className].concat(` ${addClass}`)}>
      {children}
    </div>
  );
}

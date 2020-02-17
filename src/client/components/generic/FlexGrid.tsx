import React, { ReactElement } from 'react';
import { selectBoolClass, joinClasses, ReactStyles } from '../../utils';

export interface PFlexGrid {
  // Allow custom classes, id, and style
  className?: string;
  id?: string;
  style?: ReactStyles;
  // Child elements
  children?: JSX.Element[] | JSX.Element;
  // Vertical alignment of children
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  // Horizontal alignment of children
  left?: boolean;
  center?: boolean;
  right?: boolean;
  // Flow direction
  row?: boolean;
  column?: boolean;
  rowReverse?: boolean;
  columnReverse?: boolean;
  // Wrap behavior
  wrap?: boolean;
  noWrap?: boolean;
  wrapReverse?: boolean;
  // Spacing between children
  gap?: number;
  // Remove outer margins
  unmargin?: boolean;
}

const FlexGrid: (props: PFlexGrid) => JSX.Element = ({
  className = '',
  id = '',
  style = {},
  children = [<></>],
  top = false,
  middle = false,
  bottom = false,
  left = false,
  center = false,
  right = false,
  row = false,
  column = false,
  rowReverse = false,
  columnReverse = false,
  wrap = false,
  noWrap = false,
  wrapReverse = false,
  gap = 2,
  unmargin = false,
}) => {
  const vAlign = selectBoolClass([
    [top, 'top'],
    [middle, 'middle'],
    [bottom, 'bottom'],
  ]);
  const hAlign = selectBoolClass([
    [left, 'left'],
    [center, 'center'],
    [right, 'right'],
  ]);
  const dir = selectBoolClass([
    [row, 'row'],
    [rowReverse, 'row-rev'],
    [column, 'col'],
    [columnReverse, 'col-rev'],
  ]);
  const sWrap = selectBoolClass([
    [wrap, 'wrap'],
    [noWrap, 'no-wrap'],
    [wrapReverse, 'wrap-rev'],
  ]);
  const sGap = `gap-${gap}`;
  const sUnmargin = unmargin ? 'unmargin' : '';
  return (
    <div
      className={joinClasses(['flex-grid', vAlign, hAlign, dir, sWrap, sGap, sUnmargin, className])}
      id={id || undefined}
      style={style}
    >
      {children}
    </div>
  );
};
export default FlexGrid;

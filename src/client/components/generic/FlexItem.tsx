import React from 'react';
import { selectBoolClass, joinClasses, ReactStyles } from '../../utils';

export interface PFlexItem {
  className?: string;
  id?: string;
  style?: ReactStyles;
  // Child elements
  children?: JSX.Element[] | JSX.Element | string;
  // Self- alignment within cross axis
  start?: boolean;
  center?: boolean;
  end?: boolean;
  // Responsive sizes
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const FlexItem: (props: PFlexItem) => JSX.Element = ({
  className = '',
  id = '',
  style = {},
  children = [<></>],
  start = false,
  center = false,
  end = false,
  xs = 1,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
}) => {
  const align = selectBoolClass([
    [start, 'start'],
    [end, 'end'],
    [center, 'center'],
  ]);
  const _xs = xs ? `xs-${xs}` : '';
  const _sm = sm ? `sm-${sm}` : '';
  const _md = md ? `md-${md}` : '';
  const _lg = lg ? `lg-${lg}` : '';
  const _xl = xl ? `xl-${xl}` : '';
  return (
    <div
      id={id || undefined}
      style={style}
      className={joinClasses('flex-item', align, _xs, _sm, _md, _lg, _xl, className)}
    >
      {children}
    </div>
  );
};
export default FlexItem;

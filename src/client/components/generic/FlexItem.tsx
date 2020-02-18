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
  xsr?: number;
  smr?: number;
  mdr?: number;
  lgr?: number;
  xlr?: number;
}

const FlexItem: (props: PFlexItem) => JSX.Element = ({
  className = '',
  id = '',
  style = {},
  children = [<></>],
  start = false,
  center = false,
  end = false,
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  xsr = 0,
  smr = 0,
  mdr = 0,
  lgr = 0,
  xlr = 0,
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
  const _xsr = xsr ? `xs-rel-${xsr}` : '';
  const _smr = smr ? `sm-rel-${smr}` : '';
  const _mdr = mdr ? `md-rel-${mdr}` : '';
  const _lgr = lgr ? `lg-rel-${lgr}` : '';
  const _xlr = xlr ? `xl-rel-${xlr}` : '';
  return (
    <div
      id={id || undefined}
      style={style}
      className={joinClasses('flex-item', align, _xs, _sm, _md, _lg, _xl, _xsr, _smr, _mdr, _lgr, _xlr, className)}
    >
      {children}
    </div>
  );
};
export default FlexItem;

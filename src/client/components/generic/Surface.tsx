import React, { HTMLAttributes } from 'react';
import { selectBoolClass, joinClasses, ReactStyles, Theme, Border, Rounded, Padding } from '../../utils';

export interface PSurface extends HTMLAttributes<HTMLDivElement> {
  // Look and feel
  colors?: Theme;
  border?: Border;
  rounded?: Rounded;
  padding?: Padding;
  lifted?: boolean;
  fill?: boolean;
}

const Surface: (props: PSurface) => JSX.Element = ({
  className,
  children,
  colors = Theme.standard,
  border = Border.md,
  rounded = Rounded.sm,
  padding = Padding.md,
  fill,
  lifted,
  ...div
}) => {
  const _lifted = lifted ? 'lifted' : '';
  const _fill = fill ? 'fill' : '';
  return (
    <div {...div} className={joinClasses('surface', colors, border, rounded, padding, _lifted, _fill, className)}>
      {children}
    </div>
  );
};
export default Surface;

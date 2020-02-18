import React, { ButtonHTMLAttributes, Children } from 'react';
import { selectBoolClass, joinClasses, ReactStyles, size, Theme, Border, Rounded, Padding } from '../../utils';

export interface PButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Look and feel
  colors?: Theme;
  border?: Border;
  rounded?: Rounded;
  padding?: Padding;
  lifted?: boolean;
  fill?: boolean;
}

const Button: (props: PButton) => JSX.Element = ({
  colors = Theme.standard,
  border,
  rounded = Rounded.md,
  padding = Padding.md,
  children,
  className,
  lifted,
  fill,
  ...button
}) => {
  const lift = lifted ? 'lifted' : '';
  const _fill = fill ? 'fill' : '';
  return (
    <button
      type="button"
      {...button}
      className={joinClasses('button hvr act', colors, border, rounded, padding, lift, _fill, className)}
    >
      {children}
    </button>
  );
};
export default Button;

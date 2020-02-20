import React from 'react';
import { processFlexClasses } from './types/Flex';
import { processThemeClasses } from './types/Theme';
import { TButton } from './types/Intrinsic';
import { TSurface } from './Surface';

const Button: (props: TSurface & TButton) => JSX.Element = ({
  className,
  children,
  theme = {},
  flex = {},
  ...button
}) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <button
      type="button"
      {...button}
      className={['surface button depress', flexClasses, themeClasses, className].join(' ')}
    >
      {children}
    </button>
  );
};
export default Button;

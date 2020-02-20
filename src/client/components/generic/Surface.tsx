import React from 'react';
import { TFlex, processFlexClasses } from './types/Flex';
import { TTheme, processThemeClasses } from './types/Theme';
import { TDiv } from './types/Intrinsic';

export type TSurface = {
  theme?: TTheme;
  flex?: TFlex;
};

const Surface: (props: TSurface & TDiv) => JSX.Element = ({ className, children, theme = {}, flex = {}, ...div }) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <div {...div} className={['surface', flexClasses, themeClasses, className].join(' ')}>
      {children}
    </div>
  );
};
export default Surface;

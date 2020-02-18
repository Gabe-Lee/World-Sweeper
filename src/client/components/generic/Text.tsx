import React from 'react';
import { TFlexItem, processFlexClasses } from './types/Flex';
import { TTheme, processThemeClasses } from './types/Theme';
import { TSection } from './types/Intrinsic';

export type TText = {
  flex?: TFlexItem;
  theme?: TTheme;
};

const Text: (props: TText & TSection) => JSX.Element = ({ children, className, flex = {}, theme = {}, ...section }) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <section {...section} className={['text', flexClasses, themeClasses, className].join(' ')}>
      {children}
    </section>
  );
};
export default Text;

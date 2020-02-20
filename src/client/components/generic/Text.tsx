import React from 'react';
import { processFlexClasses } from './types/Flex';
import { processThemeClasses } from './types/Theme';
import { TSection } from './types/Intrinsic';
import { TSurface } from './Surface';
import { joinClasses } from '../../utils';

const Text: (props: TSurface & TSection) => JSX.Element = ({
  children,
  className,
  flex = {},
  theme = {},
  ...section
}) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <section {...section} className={joinClasses('text', flexClasses, themeClasses, className)}>
      {children}
    </section>
  );
};
export default Text;

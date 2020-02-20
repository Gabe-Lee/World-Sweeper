// @ts-check
import React from 'react';
import processFlexClasses from './types/Flex';
import processThemeClasses from './types/Theme';

/**
 * Surface component
 *
 * Used as a generic div container component
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').TElement & import('./types/Intrinsic').TDiv} props
 */
export default function Surface({ className, children, theme = {}, flex = {}, ...div }) {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <div {...div} className={['surface', flexClasses, themeClasses, className].join(' ')}>
      {children}
    </div>
  );
}

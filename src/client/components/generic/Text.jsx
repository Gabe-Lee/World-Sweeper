// @ts-check
import React from 'react';
import processFlexClasses from './types/Flex';
import processThemeClasses from './types/Theme';
import joinClasses from './types/Intrinsic';

/**
 * Text component
 *
 * Uses HTML5 <article> under the hood for semantics
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic').HTML5Element & import('./types/Intrinsic').TElement} props
 */
export default function Text({ children, className, flex = {}, theme = {}, ...section }) {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return (
    <article {...section} className={joinClasses('text', flexClasses, themeClasses, className)}>
      {children}
    </article>
  );
}

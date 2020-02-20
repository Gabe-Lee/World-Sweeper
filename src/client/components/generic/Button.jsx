// @ts-check
import React from 'react';
import processFlexClasses from './types/Flex';
import processThemeClasses from './types/Theme.js';

/**
 * Button component
 *
 * Is both a flex container and flex member
 * @param {import('./types/Intrinsic.js').TElement & import('./types/Intrinsic.js').TButton} props
 */
const Button = ({ className, children, theme = {}, flex = {}, ...button }) => {
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

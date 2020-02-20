// @ts-check
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import processFlexClasses from './types/Flex';
import processThemeClasses from './types/Theme';

/**
 * Icon component
 *
 * Acts as a wrapper for <FontAwesomeIcon>
 * Is both a flex container and flex member
 * @param {import('@fortawesome/react-fontawesome').FontAwesomeIconProps & import('./types/Intrinsic').TElement} props
 */
const Icon = ({ className, flex = {}, theme = {}, ...icon }) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return <FontAwesomeIcon {...icon} className={['icon', flexClasses, themeClasses, className].join(' ')} />;
};
export default Icon;

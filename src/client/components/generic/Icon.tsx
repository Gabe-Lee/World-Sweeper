import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { processFlexClasses } from './types/Flex';
import { processThemeClasses } from './types/Theme';
import { TSurface } from './Surface';

const Icon: (props: FontAwesomeIconProps & TSurface) => JSX.Element = ({
  className,
  flex = {},
  theme = {},
  ...icon
}) => {
  const flexClasses = processFlexClasses(flex);
  const themeClasses = processThemeClasses(theme);
  return <FontAwesomeIcon {...icon} className={['icon', flexClasses, themeClasses, className].join(' ')} />;
};
export default Icon;

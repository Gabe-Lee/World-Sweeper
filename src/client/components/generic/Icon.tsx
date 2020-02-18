import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Icon: (props: FontAwesomeIconProps) => JSX.Element = props => <FontAwesomeIcon {...props} />;
export default Icon;

import React from 'react';

import Icon from './Icon';
import Button from './Button';
import { JSSProps, ButtonProps, IconProps, IconButtonProps } from './types/intrinsic';
import { cascade } from './styles/utils';

export default function IconButton({
  name = 'Button',
  addClass = '',
  css = {},
  children = [],
  left = false,
  right = false,
  buttonSize = '1rem',
  iconSize = '0.75rem',
  icon,
  ...props
}: JSSProps & ButtonProps & IconProps & IconButtonProps): JSX.Element {
  const buttonCss = cascade(css, { minWidth: buttonSize, minHeight: buttonSize, overflow: 'hidden' });
  const iconCss = cascade({ fontSize: iconSize });
  return (
    <Button name={name} addClass={addClass} css={buttonCss} {...props}>
      {left ? <Icon icon={icon} {...props} css={iconCss} /> : ''}
      {children}
      {right ? <Icon icon={icon} {...props} css={iconCss} /> : ''}
    </Button>
  );
}

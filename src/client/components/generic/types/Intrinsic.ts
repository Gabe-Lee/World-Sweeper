import { ReactNode, HTMLAttributes, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { Styles } from 'react-jss';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type HTML5Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export type ReactChildren = ReactNode;
export type IconProps = FontAwesomeIconProps;

export interface JSSProps {
  css?: Styles;
  addClass?: string;
  name?: string;
}

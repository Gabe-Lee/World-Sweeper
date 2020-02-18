import { ReactNode, HTMLAttributes, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type TDiv = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type TSection = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export type TChildren = ReactNode;

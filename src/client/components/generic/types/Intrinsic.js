// @ts-check
/* eslint-disable no-unused-vars */
import { ReactNode, HTMLAttributes, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

/**
 * @typedef {DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>} TDiv
 * @typedef {DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} TButton
 * @typedef {DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>} HTML5Element
 * @typedef {ReactNode} TChildren
 *
 * @typedef {{name?: string, css?: import('csstype').Properties, addClass?: string}} TJSSElement
 */

/**
 * Joins a list of class names into a single string
 * @param  {...string} classes Comma separated list of
 * @returns {string} string
 */
export default function joinClasses(...classes) {
  let joined = '';
  for (let i = 0, lim = classes.length; i < lim; i += 1) {
    if (classes[i] !== '') {
      if (joined !== '') joined += ' ';
      joined += classes[i];
    }
  }
  return joined;
}

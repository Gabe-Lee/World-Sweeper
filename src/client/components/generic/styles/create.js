// @ts-check
import { createUseStyles } from 'react-jss';

/**
 * @interface {}
 * @typedef {import('csstype').Properties} JSS
 */

/**
 * Wrapper function for createUseStyles
 *
 * Infers CSS property types automatically
 * @param {{[index: string]: import('csstype').Properties}} classes
 */
export default function(classes) {
  return createUseStyles(classes);
}

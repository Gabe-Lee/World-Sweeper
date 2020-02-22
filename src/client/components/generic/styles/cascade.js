import { merge } from 'lodash';

/**
 * Creates a new cascaded style object from multiple sources without mutation
 * @param  {...import('csstype').Properties} styles
 */
export default function cascade(...styles) {
  return merge({}, ...styles);
}

import { merge } from 'lodash';
import { Styles } from 'react-jss';

export function cascade(...styles: Styles[]): Styles {
  return merge({}, ...styles);
}

export function joinClasses(...classes: string[]): string {
  let joined = '';
  for (let i = 0, lim = classes.length; i < lim; i += 1) {
    if (classes[i] !== '') {
      if (joined !== '') joined += ' ';
      joined += classes[i];
    }
  }
  return joined;
}

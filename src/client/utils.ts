export function selectBoolClass(settings: [boolean, string][]): string {
  for (let i = 0, lim = settings.length; i < lim; i += 1) {
    if (settings[i][0] === true) return settings[i][1];
  }
  return '';
}

export function joinClasses(classes: string[]): string {
  let joined = '';
  for (let i = 0, lim = classes.length; i < lim; i += 1) {
    if (classes[i] !== '') {
      if (joined !== '') joined += ' ';
      joined += classes[i];
    }
  }
  return joined;
}

export interface ReactStyles {
  [index: string]: string;
}

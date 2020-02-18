export function selectBoolClass(settings: [boolean, string][]): string {
  for (let i = 0, lim = settings.length; i < lim; i += 1) {
    if (settings[i][0] === true) return settings[i][1];
  }
  return '';
}

export function joinClasses(...classes: (string | undefined)[]): string {
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

export enum size {
  r0 = 'r0', // 0rem
  r1 = 'r1', // 0.0625rem => 1px
  r2 = 'r2', // 0.125rem => 2px
  r4 = 'r4', // 0.25rem => 4px
  r8 = 'r8', // 0.5rem => 8px
  r12 = 'r12', // 0.75rem => 12px
  r16 = 'r16', // 1rem => 16px
  r20 = 'r20', // 1.25rem => 20px
  r24 = 'r24', // 1.5rem => 24px
  r32 = 'r32', // 2rem => 32px
  r40 = 'r40', // 2.5rem => 40px
  r48 = 'r48', // 3rem => 48px
  r56 = 'r56', // 3.5rem => 56px
  r64 = 'r64', // 4rem => 64px
  p10 = 'p10', // 10%
  p25 = 'p25', // 25%
  p50 = 'p50', // 50%
}

export enum Border {
  sm = 'bord-sm',
  md = 'bord-md',
  lg = 'bord-lg',
}

export enum Rounded {
  sm = 'round-sm',
  md = 'round-md',
  lg = 'round-lg',
  pill = 'round-pill',
}

export enum Padding {
  sm = 'pad-sm',
  md = 'pad-md',
  lg = 'pad-lg',
}

export enum Theme {
  standard = 'color-standard',
  prime = 'color-prime',
  alter = 'color-alter',
  pAccent = 'color-prime-accent',
  aAccent = 'color-alter-accent',
  dPrime = 'color-prime-dark',
  dAlter = 'color-alter-dark',
  clash = 'color-clash',
}

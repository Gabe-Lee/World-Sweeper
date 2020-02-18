export type VAlign = 'top' | 'middle' | 'bottom';
export type HAlign = 'left' | 'center' | 'right';
export type SAlign = 'start' | 'center' | 'end' | 'fill';
export type Align = [VAlign, HAlign] | [HAlign, VAlign];

export type Flow = 'row' | 'row-rev' | 'col' | 'col-rev';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-rev';

export type FlexValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GapValues = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TFlexGrid = {
  align?: Align;
  flow?: Flow;
  wrap?: Wrap;
  gap?: FlexValues;
};

export type TFlexItem = {
  selfAlign?: SAlign;
  xs?: FlexValues;
  sm?: FlexValues;
  md?: FlexValues;
  lg?: FlexValues;
  xl?: FlexValues;
  xsr?: FlexValues;
  smr?: FlexValues;
  mdr?: FlexValues;
  lgr?: FlexValues;
  xlr?: FlexValues;
};

export type TFlex = TFlexGrid & TFlexItem;

export const processFlexClasses: (props: TFlex) => string = ({
  align,
  flow,
  wrap,
  gap,
  selfAlign,
  xs,
  sm,
  md,
  lg,
  xl,
  xsr,
  smr,
  mdr,
  lgr,
  xlr,
}) => {
  const _align = align || [];
  const _gap = gap ? `gap-${gap}` : undefined;
  const _selfAlign = selfAlign ? `self-${selfAlign}` : undefined;
  const _xs = xs ? `xs-${xs}` : xsr ? `xsr-${xsr}` : undefined;
  const _sm = sm ? `sm-${sm}` : smr ? `smr-${smr}` : undefined;
  const _md = md ? `md-${md}` : mdr ? `mdr-${mdr}` : undefined;
  const _lg = lg ? `lg-${lg}` : lgr ? `lgr-${lgr}` : undefined;
  const _xl = xl ? `xl-${xl}` : xlr ? `xlr-${xlr}` : undefined;
  return ['flex', _align, flow, wrap, _gap, _selfAlign, _xs, _sm, _md, _lg, _xl].join(' ');
};

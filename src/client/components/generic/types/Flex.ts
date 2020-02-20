import { joinClasses } from '../../../utils';

export type VAlign = 'top' | 'middle' | 'bottom';
export type HAlign = 'left' | 'center' | 'right';
export type SAlign = 'start' | 'center' | 'end' | 'fill';
export type Align = [VAlign, HAlign] | [HAlign, VAlign];

export type Flow = 'row' | 'row-rev' | 'col' | 'col-rev';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-rev';

export type FlexValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'min';
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
  const _align = align ? joinClasses(align[0] || '', align[1] || '') : '';
  const _gap = gap ? `gap-${gap}` : '';
  const _selfAlign = selfAlign ? `self-${selfAlign}` : '';
  const _xs = typeof xs !== 'undefined' ? `xs-${xs}` : xsr ? `xsr-${xsr}` : '';
  const _sm = typeof sm !== 'undefined' ? `sm-${sm}` : smr ? `smr-${smr}` : '';
  const _md = typeof md !== 'undefined' ? `md-${md}` : mdr ? `mdr-${mdr}` : '';
  const _lg = typeof lg !== 'undefined' ? `lg-${lg}` : lgr ? `lgr-${lgr}` : '';
  const _xl = typeof xl !== 'undefined' ? `xl-${xl}` : xlr ? `xlr-${xlr}` : '';
  return joinClasses('flex', _align, flow || '', wrap || '', _gap, _selfAlign, _xs, _sm, _md, _lg, _xl);
};

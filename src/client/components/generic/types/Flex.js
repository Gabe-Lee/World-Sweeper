// @ts-check
import joinClasses from './Intrinsic';

/**
 * @typedef {'top' | 'middle' | 'bottom'} VAlign
 * @typedef {'left' | 'center' | 'right'} HAlign
 * @typedef {'start' | 'center' | 'end' | 'fill'} SAlign
 * @typedef {[VAlign, HAlign] | [HAlign, VAlign]} Align
 * @typedef {'row' | 'row-rev' | 'col' | 'col-rev'} Flow
 * @typedef {'nowrap' | 'wrap' | 'wrap-rev'} Wrap
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'min'} FlexValues
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6} GapValues
 * @typedef {{align?: Align, flow?: Flow, wrap?: Wrap, gap?: FlexValues}} TFlexGrid
 * @typedef {{selfAlign?: SAlign, xs?: FlexValues, sm?: FlexValues, md?: FlexValues, lg?: FlexValues, xl?: FlexValues, xsr?: FlexValues, smr?: FlexValues, mdr?: FlexValues, lgr?: FlexValues, xlr?: FlexValues}} TFlexItem
 * @typedef {TFlexGrid & TFlexItem} TFlex
 */

/**
 * Parses Flex properties into a string of css class names
 * @param {TFlex} props
 * @returns {string} string
 */
const processFlexClasses = ({ align, flow, wrap, gap, selfAlign, xs, sm, md, lg, xl, xsr, smr, mdr, lgr, xlr }) => {
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
export default processFlexClasses;

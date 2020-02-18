import React, { ReactElement } from 'react';

import FlexGrid from './generic/FlexGrid';
import FlexItem from './generic/FlexItem';
import Surface from './generic/Surface';
import Button from './generic/Button';

import { Theme, Border, Padding, Rounded } from '../utils';

const App = (): ReactElement => {
  return (
    <>
      <div id="app">HELLO WORLD</div>
      <FlexGrid gap={4}>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.standard} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.standard
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.prime} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.prime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.alter} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.alter
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.pAccent} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.pAccent
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.aAccent} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.aAccent
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dPrime} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dPrime
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.dAlter} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.dAlter
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Button colors={Theme.clash} border={Border.md} padding={Padding.lg} rounded={Rounded.pill} lifted fill>
            Theme.clash
          </Button>
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          <Surface colors={Theme.dPrime} lifted fill>
            I am a surface, not a button, I dont have any interaction stuff on me and I am just nice.
          </Surface>
        </FlexItem>
      </FlexGrid>
      <div>Next Div</div>
    </>
  );
};
export default App;

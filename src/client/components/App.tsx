import React, { ReactElement } from 'react';

import FlexGrid from './generic/FlexGrid';
import FlexItem from './generic/FlexItem';

const App = (): ReactElement => {
  return (
    <>
      <div id="app">HELLO WORLD</div>
      <FlexGrid gap={4}>
        <FlexItem xs={1} md={2} lg={4}>
          1
        </FlexItem>
        <FlexItem xs={1} md={2} lg={4}>
          2
        </FlexItem>
      </FlexGrid>
      <div>Next Div</div>
    </>
  );
};
export default App;

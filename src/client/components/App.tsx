import React, { ReactElement } from 'react';

import Surface from './generic/Surface';
import Button from './generic/Button';

import Navbar from './Navbar';
import GameClient from './GameClient';

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <GameClient />
    </>
  );
};
export default App;

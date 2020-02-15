import React, { ReactElement } from 'react';

import './normalize.scss';
import './flex.scss';

const App = (): ReactElement => {
  return (
    <>
      <div id="app">HELLO WORLD</div>
      <div className="grid space-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <div className="flex-xs-1 flex-md-2 flex-lg-4">{num}</div>
        ))}
      </div>
    </>
  );
};
export default App;

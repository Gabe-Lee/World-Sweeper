import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import { dark, light } from './style/themes';

const App = (): JSX.Element => {
  const prefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDarkTheme ? dark : light}>
      <div id="app">HELLO WORLD</div>
    </ThemeProvider>
  );
};
export default App;

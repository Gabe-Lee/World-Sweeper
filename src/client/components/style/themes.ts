import { createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: green,
  },
});

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: green,
    secondary: green,
  },
});

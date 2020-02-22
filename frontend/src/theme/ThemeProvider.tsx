import React from 'react';
import {ThemeProvider, createMuiTheme, Theme} from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#efdcd5',
      main: '#bcaaa4',
      dark: '#8c7b75',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6434',
      main: '#dd2c00',
      dark: '#a30000',
      contrastText: '#ffffff',
    },
  },
});

export interface themeProps {
  children: any,
}


const themeProv = (props:themeProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default themeProv;

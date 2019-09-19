import React from 'react';
import { ThemeProvider, } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import AmeHeader from './AmeHeader';
import AmeContent from './AmeContent';
import Navbar from './Navbar';
import {
  Root,
  Footer,
  presets,
} from 'mui-layout';

const theme = createMuiTheme();
const { createStandardLayout } = presets;
const config = createStandardLayout();


const Main = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>

        <Root config={config}>

        <CssBaseline />

        <AmeHeader />

        <Navbar />

        <AmeContent />

        <Footer>Copyright &copy; AmePower 2019</Footer>

        </Root>

      </ThemeProvider>

    </div>
  );
};

export default Main;

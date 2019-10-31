import React from 'react';
import { ThemeProvider, } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import AmeHeader from './header/AmeHeader';
import AmeContent from './content/AmeContent';
import Navbar from './sidebar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Root,
  Footer,
  presets,
} from 'mui-layout';

const theme = createMuiTheme();
const { createStandardLayout } = presets;
const config = createStandardLayout();

const useStyles = makeStyles(theme => ({
  footer: {
    padding: '2% 2%'
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Root config={config}>
          <CssBaseline />
          <AmeHeader />
          <Navbar />
          <AmeContent />
          <Footer className={classes.footer}>Copyright &copy; AmePower 2019</Footer>
        </Root>
      </ThemeProvider>
    </div>
  );
};

export default Main;

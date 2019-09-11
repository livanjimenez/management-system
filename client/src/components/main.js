import React from 'react';
import { ThemeProvider, } from '@material-ui/styles';
import { createMuiTheme, Typography, CssBaseline } from "@material-ui/core";
import AmeHeader from './AmeHeader';
import Navbar from './Navbar';
import {
  Root,
  Content,
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

        <Content>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta. Adipiscing commodo elit
            at imperdiet. Lacus sed turpis tincidunt id aliquet risus feugiat
            in ante. Cras tincidunt lobortis feugiat vivamus at augue eget
            arcu. Hendrerit dolor magna eget est. Fames ac turpis egestas
            maecenas. Cras semper auctor neque vitae tempus quam pellentesque.
            Amet nisl purus in mollis nunc sed id semper. Molestie ac feugiat
            sed lectus vestibulum mattis ullamcorper velit sed. Id aliquet
            lectus proin nibh nisl condimentum.
          </Typography>
        </Content>

        <Footer>Copyright &copy; AmePower 2019</Footer>

        </Root>

      </ThemeProvider>

    </div>
  );
};

export default Main;
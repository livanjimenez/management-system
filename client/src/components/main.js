import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Typography, CssBaseline } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import {
  Root,
  Header,
  Nav,
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
          <Header
            renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
          >
            <h2>AmePower - Management System</h2>
          </Header>
          <Nav
            renderIcon={collapsed => collapsed ? <ChevronRight /> : <ChevronLeft />}
          >
            Nav is here!
          </Nav>
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
          <Footer>Footer</Footer>
        </Root>
      </ThemeProvider>
    </div>
  );
};

export default Main;
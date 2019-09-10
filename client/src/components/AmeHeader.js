import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { ChevronLeft, MenuRounded, } from "@material-ui/icons";
import {
  Header,
} from 'mui-layout';

const useHeaderStyles = makeStyles({
  header: {
    backgroundColor: '#C3073F',
    color: 'white',
  },
  loginButton: {
    float: 'right', // Fix Login button
  },
});

const AmeHeader = () => {
  const classes = useHeaderStyles();

  return (
    <div>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
        className={classes.header}
      >
        <h2>AmePower - Management System</h2>

        <Button color="inherit">Login</Button>
      </Header>
    </div>
  );
};

export default AmeHeader;
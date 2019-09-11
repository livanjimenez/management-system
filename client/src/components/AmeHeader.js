import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import {
  Header,
} from 'mui-layout';

const useHeaderStyles = makeStyles({
  header: {
    backgroundColor: '#C3073F',
    color: 'white',
  },
  loginButton: {
    marginLeft: 'auto',
    marginRight: '8',
  },
});

const AmeHeader = () => {
  const classes = useHeaderStyles();

  return (
    <div>
      <Header className={classes.header}>
        <h2>AmePower - Management System</h2>
        <Button 
          color="inherit" 
          size="large" 
          variant="outlined" 
          className={classes.loginButton}
        >
          Login
        </Button>
      </Header>
    </div>
  );
};

export default AmeHeader;

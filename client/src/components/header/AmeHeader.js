import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import {
  Header,
} from 'mui-layout';
import AmeLogo from '../../images/Amepower_PNG.png';

const useHeaderStyles = makeStyles({
  header: {
    backgroundColor: '#E8E8E8',
    color: 'black',
    boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)',
  },
  loginButton: {
    marginLeft: 'auto',
    marginRight: '8',
  }
})

const AmeHeader = () => {
  const classes = useHeaderStyles();

  return (
    <div>
      <Header className={classes.header}>
        <img src={AmeLogo} alt='Logo' style={{ width: '225px', height: '60px' }} />
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
 



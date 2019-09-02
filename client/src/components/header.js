import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: '1',
    float: 'left',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        AmePower - Management System
      </Typography>
    </header>
  );
}

export default Header;
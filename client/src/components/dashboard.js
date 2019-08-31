import React from 'react';
import Header from './header';
import {
  makeStyles,
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: '1',
  },
  loginButton: {
    float: 'right'
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Header />
          <Button color="inherit" className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Dashboard;
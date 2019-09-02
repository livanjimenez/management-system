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
    marginLeft: 'auto',
    marginRight: '20',
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Header />
          <Button color="inherit" size="large" variant="outlined" className={classes.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Dashboard;
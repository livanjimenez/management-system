import React from 'react';
import Header from './header';
import {
  makeStyles,
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  loginButton: {
    marginLeft: 'auto',
    marginRight: '20',
  },
  toolbar: theme.mixins.toolbar,
}));

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
        <nav className={classes.drawer}>

        </nav>
      </AppBar>
    </div>
  );
}

export default Dashboard;
import React from 'react';
import { 
  makeStyles, 
  List, 
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },

});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        
      </List>
    </div>
  );
}

export default Dashboard;
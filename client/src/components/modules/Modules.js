import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    height: 250,
    width: 250,
  },
}));

export default function Modules() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid item xs>
        <Paper className={classes.paper}>
          some text
        </Paper>
      </Grid>
    </div>
  );
}
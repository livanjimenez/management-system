import React from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modules from '../modules/Module.DisplayData';
import TestingForms from '../forms/Testing.Forms';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '1%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Testing({ match }) {
  const classes = useStyles();
  console.log('match', match);
  
  return (
    <Content>
      <Typography
        align="center"
        variant="h2"
        className={classes.title}
      >
        TESTING
        </Typography>
        <TestingForms/>
    </Content>
  );
}
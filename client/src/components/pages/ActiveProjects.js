import React from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modules from '../modules/Module.DisplayData';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '1%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ActiveProjects() {
  const classes = useStyles();
  

  return (
    <Content>
      <Typography
        align="center"
        variant="h2"
        className={classes.title}
      >
        ACTIVE MODULES
        </Typography>
      <Modules />
    </Content>
  );
}
import React from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProductionForm from '../forms/Production.Forms'
import ProductionModules from '../modules/Module.Production';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '1%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Production() {
  const classes = useStyles();
  
  return (
    <Content>
      <Typography
        align="center"
        variant="h2"
        className={classes.title}
      >
        PRODUCTION
        </Typography>
      <ProductionForm />
      <ProductionModules />
    </Content>
  );
}
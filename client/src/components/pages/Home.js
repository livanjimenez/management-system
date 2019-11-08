import React from 'react';
import { Content } from 'mui-layout';
import ModuleForms from '../forms/Module.Forms';
import ModuleDisplayData from '../modules/Module.DisplayData';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '3%',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Content>
        <Typography
        align="center"
        variant="h2"
        className={classes.title}
        >
          HOME PAGE
        </Typography>
        <ModuleForms />
        <ModuleDisplayData />
      </Content>
    </div>
  );
}
import React from 'react';
import { Content } from 'mui-layout';
import ModuleForm from '../forms/Module.Forms';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '1%',
  },
}));

export default function NewProjectForm() {
  const classes = useStyles();

  return (
    <Content>
      <Typography
        align="center"
        variant="h2"
        className={classes.title}
      >
        CREATE NEW MODULE
      </Typography>
      <ModuleForm />
    </Content>
  );
}
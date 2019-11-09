import React, { useState, useEffect } from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await axios('/activeprojects');
      setProjects(result.data);
    };

    fetchProjects();
  }, []);

  return (
    <Content>
      <Typography
        align="center"
        variant="h2"
        className={classes.title}
      >
        ACTIVE PROJECTS
        </Typography>

      {projects.map(item => (
        <ul>
          <li>{item.newProjectName}</li>
        </ul>
      ))}
      <Modules />
    </Content>
  );
}
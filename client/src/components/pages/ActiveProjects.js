import React, { useState, useEffect } from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default function ActiveProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await axios('/activeprojects');
      setProjects(result.data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Content>
      <Typography
        align="center"
        variant="h2"
        >
          ACTIVE PROJECTS
        </Typography>

        {projects.map(item => (
          <ul>
            <li>{item.newProjectName}</li>
          </ul>
        ))}
      </Content>
    </div>
  );
}
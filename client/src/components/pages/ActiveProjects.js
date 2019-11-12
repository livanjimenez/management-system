import React from 'react';
import { Content } from 'mui-layout';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Modules from '../modules/Module.DisplayData';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: '1%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ActiveProjects({ match }) {
  const classes = useStyles();
  console.log('match', match);
  
  return (
    <Content>
      <div>
        <ul>
          <li>
            <Link to={`${match.url}Production`}>Production</Link>
          </li>
        </ul>
      </div>

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
import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: 'auto',
    position: 'relative',
    justifyContent: 'center',
    outline: 0,
    display: 'flex',
    borderRadius: '4px',
  },
  root: {
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif'
  },
}));

export default function ModuleDisplayData() {
  const classes = useStyles();

  // GET DATA FROM DB
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/modules');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          align="center"
          variant="h6"
        >
          <List>
            {data.map(item => (
              <ListItem>
                <ListItemText>Serial ID:</ListItemText>
                <ListItemText>{item.serial_id}</ListItemText>
                <ListItemText>Location:</ListItemText>
                <ListItemText>{item.location}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Typography>
      </Paper>
    </Container>
  );
}
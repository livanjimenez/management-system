import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  root: {
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    flexGrow: 1,
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

  const [remove, setRemove] = useState({
    _id: '',
  });

  const handleDelete = () => {
    const id = {
      _id: remove._id
    };

    axios.delete(`/modules/${id._id}`);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="flex-start"
      >
        {
          data.map(item => (
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Typography
                        align="center"
                      >
                        Serial ID: {item.serial_id}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Typography
                        align="center"
                      >
                        Location: {item.location}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      <Typography
                        align="center"
                      >
                        Created: {item.createdAt}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
                <button onClick={handleDelete}>DELETE</button>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
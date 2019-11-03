import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

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

  // maybe add another <GRID> to create rows for the modules

  return (
    <Grid
    container 
    item xs={3}
    direction="row"
    alignItems="flex-start"
    justify="flex-start"
    >
    <Container maxWidth="xs">
      {data.map(item => (
        <Paper className={classes.paper}>
          <Typography
            align="center"
            variant="h6"
          >
            <List>
              <ListItem>
                <ListItemText>Serial ID:</ListItemText>
                <ListItemText>{item.serial_id}</ListItemText>
                <ListItemText>Location:</ListItemText>
                <ListItemText>{item.location}</ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Paper>
      ))}
    </Container>
    </Grid>
  );
}
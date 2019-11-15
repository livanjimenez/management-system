import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
  },
  root: {
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  send: {
    margin: theme.spacing(1),
  },
}));

export default function ModuleDisplayData() {
  const classes = useStyles();

  // GET DATA FROM DB
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setData(
        await axios('/modules')
          .then(res => res.data)
      );
    })();
  }, []);

  function reloadPage() {
    window.location.reload();
  }

  // DELETE FROM DB
  const deleteModule = (id) => {
    axios.delete(`/modules/${id}`)
      .then(res => res.data)
      .then(() => alert("Module deleted!"))
      .then(() => reloadPage())
      .catch(err => console.log(err));
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
                      <Typography variant="h6">SERIAL ID</Typography>
                      <Typography variant="subtitle1">{item.serial_id}</Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider style={{ margin: "12px 0" }} />
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h6">REASON</Typography>
                      <Typography variant="subtitle1">
                        {item.reason}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider style={{ margin: "12px 0" }} />
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h6">DESCRIPTION</Typography>
                      <Typography variant="subtitle1">
                        {item.description}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>

                <Button
                  onClick={() => { deleteModule(item._id) }}
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                >
                  DELETE
                </Button>


              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
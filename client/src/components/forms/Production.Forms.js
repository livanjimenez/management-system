import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
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
  button: {
    margin: theme.spacing(2),
  },
}));

export default function ModuleForms() {
  const classes = useStyles();

  // POST
  const [module, setModule] = useState({
    serial_id: '',
    reason: '',
    description: '',
  });

  function reloadPage() {
    window.location.reload();
  }

  const submit = e => {

    e.preventDefault();

    const data = {
      serial_id: module.serial_id,
      reason: module.reason,
      description: module.description,
    };

    axios.post('/modules', data)
      .then(res => console.log(res))
      .then(() => reloadPage())
      .catch(err => alert(err));
  };

  const handleChange = e => {
    e.persist();
    setModule({ ...module, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs">
      <br />
      <Paper className={classes.paper}>
        <form onSubmit={submit} className={classes.container}>
          <TextField
            id="serial_id"
            className={classes.textField}
            label="Serial ID"
            margin="normal"
            onChange={handleChange}
            name="serial_id"
            value={module.serial_id}
          />
          <TextField
            id="reason"
            className={classes.textField}
            label="Reason"
            margin="normal"
            onChange={handleChange}
            name="reason"
            value={module.reason}
          />
          <TextField
            id="description"
            className={classes.textField}
            label="Description"
            margin="normal"
            multiline
            rowsMax="4"
            onChange={handleChange}
            name="description"
            value={module.description}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.button}
          >
            POST
          </Button>
        </form>
      </Paper>
      <br />


    </Container>

  );
}
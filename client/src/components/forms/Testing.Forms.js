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
    Tested_for: '',
    Tested_by: '',
  });

  function reloadPage() {
    window.location.reload();
  }

  const submit = e => {

    e.preventDefault();

    const data = {
      serial_id: module.serial_id,
      Tested_for: module.Tested_for,
      Tested_by: module.Tested_by,
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
            id="Tested_for"
            className={classes.textField}
            label="Tested for"
            margin="normal"
            onChange={handleChange}
            name="Tested_for"
            value={module.Tested_for}
          />
          <TextField
            id="Tested_by"
            className={classes.textField}
            label="Tested by"
            margin="normal"
            onChange={handleChange}
            name="Tested_by"
            value={module.Tested_by}
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
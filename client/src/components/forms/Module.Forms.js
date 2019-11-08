import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import ConfirmationDialog from './ConfirmationDialog';
import Dropdown from "./dropdown";


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
}));

export default function ModuleForms() {
  const classes = useStyles();

  // POST
  const [module, setModule] = useState({
    serial_id: '',
    location: '',
    createdAt: ''
  });
  
  const submit = e => {

    e.preventDefault();
    const data = {
      serial_id: module.serial_id,
      location: module.location,
    };

    axios.post('/modules', data)
      .then(res => console.log(res));
  };

  const handleChange = e => {
    e.persist();
    setModule({ ...module, [e.target.name]: e.target.value });
  };

  const confirm = () => {
    this.state.callback()
    this.hide()
  }

  return (
    <Container maxWidth="sm">
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
          <ConfirmationDialog />
          <Dropdown/>
          <Button type="submit">POST</Button>

        </form>
      </Paper>
      <br />
    </Container>
  );
}
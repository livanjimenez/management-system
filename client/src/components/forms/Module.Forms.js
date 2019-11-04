import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
  // GET
  const [data, setData] = useState([]);
  // POST
  const [module, setModule] = useState({
    _id: '',
    serial_id: '',
    location: '',
    createdAt: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/modules');
      setData(result.data);
    };

    fetchData();
  }, []);

  const submit = e => {
    e.preventDefault();

    const data = {
      serial_id: module.serial_id,
      location: module.location,
      createdAt: module.createdAt,
    };

    axios.post('/modules', data)
      .then(res => console.log(res))
  };

  const handleChange = e => {
    e.persist();
    setModule({ ...module, [e.target.name]: e.target.value });
  };

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
          <TextField
            id="location"
            className={classes.textField}
            label="Location"
            margin="normal"
            onChange={handleChange}
            name="location"
            value={module.location}
          />
          <Button type="submit">POST</Button>
        </form>
      </Paper>
      <br />

      {/* <ul>
        {data.map(item => (
          <li key={item._id}>
            <p>Module Data:</p>
            <a href={item.url}>Serial ID: {item.serial_id}</a>
            <br />
            <a href={item.url}>Location: {item.location}</a>
          </li>
        ))}
      </ul> */}
    </Container>
  );
}
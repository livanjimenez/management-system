import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
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
}));

export default function ModuleForms() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [module, setModule] = useState({
    _id: '',
    serial_id: '',
    location: ''
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
      location: module.location
    };

    axios.post('/modules', data)
      .then(res => console.log(res))
  };

  const handleChange = e => {
    e.persist();
    setModule({ ...module, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <a href={item.url}>{item.serial_id}</a>
          </li>
        ))}
      </ul>
      <Button>BUTTON</Button>
      <form onSubmit={submit} className={classes.container}>
        <TextField
          id="serial_id"
          className={classes.textField}
          label="Serial ID"
          margin="normal"
          onChange={handleChange} name="serial_id" value={module.serial_id}
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
  },
  fab: {
    margin: theme.spacing(2),
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  // const [values, setValues] = useState({
  //   name: '',
  // });

  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting data ${data}`);
  };

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      
      <TextField
        id="data"
        label="Data"
        value={data}
        onChange={e => setData(e.target.value)}
        className={classes.textField}
      />

      <Fab color="secondary" type="submit" className={classes.fab}>
        <AddIcon />
      </Fab>

    </form>
  );
}

import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="S/N"
        label="Serial Number"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        id="Location"
        label="Location"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        id="Date"
        label="Date"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />

    </form>
  );
}

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useAxios from 'axios-hooks';
import Input from '@material-ui/core/Input';

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

  const [{ data: putData, loading: putLoading, error: putError },
    executePut
  ] = useAxios({
    url: '/module/:module_id',
    method: 'PUT'
  }, { manual: true });

  return (
    <div>
      <form className={classes.container} autoComplete="on">
        <TextField
          label="Serial ID"
          className={classes.textField}
          margin="normal"
        >
          <Input 
          type="serial_id"
          />
        </TextField>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SwitchTab() {
  const classes = useStyles();

  const [move, setMove] = useState('');

  const handleChange = e => {
    setMove(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Move module</InputLabel>
        <Select
          value={move}
          onChange={handleChange}
        >
          <MenuItem value={1}>
            Production
            </MenuItem>
          <MenuItem value={2}>Testing</MenuItem>
          <MenuItem value={3}>Shipping</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const accent = purple.A200;
export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Create
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Remove
      </Button>
      <Button variant="contained" color="accent" className={classes.button}>
        Update
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
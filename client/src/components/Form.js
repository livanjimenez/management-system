import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    textAlign: 'center',
  },
  input: {
    margin: theme.spacing(1),
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" fixed>
        <h2 className={classes.title}>Enter your project's information</h2>
        <form className={classes.container}>
          <Input
            className={classes.input}
            placeholder="Name of vehicle"
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Input
            className={classes.input}
            placeholder="Name of module"
            inputProps={{
              'aria-label': 'description',
            }}
          />
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </Select>
        </form>
      </Container>
      <div />
    </div>
  );
};

export default Form;
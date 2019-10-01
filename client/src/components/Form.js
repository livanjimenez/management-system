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
<<<<<<< HEAD
      <container >
          <form >
      <TextField
        label="Vehicles"
        // value={Vehicles}
        // onChange={handleChange('Vehicles')}
        margin="normal"
      />
      <br/>
      <TextField
        label="Modules"
        // value={Modules}
        // onChange={handleChange('Modules')}
        margin="normal"
      />
    </form>
      </container>
=======
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
>>>>>>> 15024033c1b81730ac7e16844ac4aed64881c67e
  );
};

export default Form;
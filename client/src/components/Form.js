import React from 'react';
import { TextField } from '@material-ui/core';
// import RenderToLayer from 'material-ui/internal/RenderToLayer';

// state = {
//   open: false,
//   form: {
//     vehicle: '',
//     modules: ''
//   }
// }

// handleChange = name => ({ target: { value } }) => {
//   this.setState({
//     this.form{
//     ...this.state.form,
//     [name]: value
//   }
// })
// }

const Form = () => {
  // const { open, form: { vehicle, modules } } = this.state;

  return (
    <form>
      <TextField
        label="vehicle"
        // value={vehicle}
        // onChange={handleChange('vehicle')}
        margin="normal"
      />
    </form>
  );
};

export default Form;
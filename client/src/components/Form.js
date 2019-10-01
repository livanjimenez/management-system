import React from 'react';
import { TextField } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

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
  );
};

export default Form;
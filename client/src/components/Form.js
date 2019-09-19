import React, { Component } from 'react';
import {TextField} from 'material-ui';
import RenderToLayer from 'material-ui/internal/RenderToLayer';


export default class enxtends Component{
    state = {
        open: false,
        form: {
            vehicle: '',
            modules: ''
        }
    }
}


handleChange = name => ({target: {value}}) => {
    this.setState({
        this.form{
            ...this.state.form,
        [name] : value
        }
    })
}


Render() {
    const {open , form: {vehicle , modules}} = this.state

return(
    <form>
<TextField
        label="vehicle"
        value={vehicle}
        onChange={handleChange('vehicle')}
        margin="normal"
      />
</form>
)
}

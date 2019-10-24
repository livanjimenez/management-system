import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        color = 'primary'
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
  );
}
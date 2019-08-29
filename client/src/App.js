import React from 'react';
import Dashboard from './components/dashboard';
import Button from '@material-ui/core/Button';
import './App.css';


function App() {
  return (
    // Testing @material-ui framework for UI Design
    <div className="App">
      <Button variant="contained" color="primary">
          Hello World!
        </Button>
      <Dashboard/>
    </div>
  );
}

export default App;


/**
 * Colors:
 * #1A1A1D ; black?
 * #4E4E50 ; gray?
 * #950740 ; dark bright red?
 * #6F2232 ; brick red?
 * #C3073F ; bright brick red?
 */
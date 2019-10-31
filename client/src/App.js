import React, { useState, useEffect } from 'react';
//import Main from './components/Main';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState('');
  
  useEffect(() => {
    axios.get('/modules')
      .then()
  });

  return (
    <div>

    </div>
  );
}

export default App;
// https://blog.logrocket.com/mern-stack-a-to-z-part-1/
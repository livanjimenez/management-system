import React from 'react';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ActiveProjects from './components/pages/ActiveProjects';
import NewProjectForm from './components/pages/NewProject.Forms';
import Production from './components/pages/Production';

function App() {

  return (
    <div>
      <Main>
        <Router>
          <Route exact path="/" component={ActiveProjects} />
          <Route exact path="/newproject" component={NewProjectForm} />
          <Route exact path="/production" component={Production} />
        </Router>
      </Main>
    </div>
  );
}

export default App;

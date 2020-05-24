import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faInfoCircle,
  faCheck,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import GitHubState from './context/gitHub/GitHubState';
import AlertState from './context/alert/AlertState';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import './App.css';

// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
library.add(faGithub, faInfoCircle, faCheck, faTimesCircle);

const App = _ => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Main from './components/Main';
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Main} />
          <Route path='/auth' component={Auth} />
        </div>
      </Router>
    );
  }
}

export default App;

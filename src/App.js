import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import LoginPage from './containers/LoginPage'
import Batches from './containers/Batches'
import BatchDetail from './containers/BatchDetail'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/batches" component={Batches} />
          <Route exact path="/batches/:id" component={BatchDetail} />
        </div>
      </Router>
    );
  }
}

export default App;

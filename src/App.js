import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginPage from './containers/LoginPage'
import LogoutPage from './containers/LogoutPage'
import Batches from './containers/Batches'
import BatchDetail from './containers/BatchDetail'
import Evaluation from './containers/Evaluation'
import EditEvaluation from './containers/EditEvaluation'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div className='App'>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/batches" component={Batches} />
          <Route exact path="/batches/:id" component={BatchDetail} />
          <Route exact path="/:id/evaluation" component={Evaluation} />
          <Route exact path="/:id/edit" component={EditEvaluation} />
        </div>
      </Router>
       </MuiThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = {'/'} component = {Home} />
          <Route exact path = {'/signup'} component = {Signup} />
          <Route exact path = {'/login'} component = {Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

library.add(faIgloo)

export default App;

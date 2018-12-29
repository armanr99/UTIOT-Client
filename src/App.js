import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path = {'/'} component = {Home} />
            <Route exact path = {'/signup'} component = {Signup} />
            <Route exact path = {'/login'} component = {Login} />
          </Switch>
        </BrowserRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
      </div>
    );
  }
}

library.add(faIgloo)

export default App;

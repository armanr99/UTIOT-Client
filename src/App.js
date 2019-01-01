import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
import Auth from './Auth';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Auth>
            <Switch>
              <Route exact path = {'/'}
                render={() =>
                  this.props.authenticated ? (
                    <Dashboard />
                  ) : (
                    <Home />
                  )
                } />
              <Route exact path = {'/signup'}
                render={() =>
                  this.props.authenticated ? (
                    <Redirect to="/" />
                  ) : (
                    <Signup />
                  )
                } />
              <Route exact path = {'/login'}
                render={() =>
                  this.props.authenticated ? (
                    <Redirect to="/" />
                  ) : (
                    <Login />
                  )
                } />
              <Route component = {NotFound} />
            </Switch>
          </Auth>
        </BrowserRouter>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
      </div>
    );
  }
}

library.add(faIgloo)

export default connect(mapStateToProps)(App);

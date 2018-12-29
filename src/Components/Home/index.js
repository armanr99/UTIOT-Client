import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import Navbar from '../Navbar';

export default class Home extends React.Component {
    render() {
      return ( 
      <div className="home">
        <div class="home_info">
          <img src={logo} alt="logo"/>
          <p>Welcome to UT IOT</p>
          <p>Open platfrom to analyse your IOT projects</p>
          <div class="home_buttons">
            <b><a className="home_button" href="/login">Login</a></b>
            <b><a className="home_button" href="/signup">Signup</a></b>
          </div>
        </div>
      </div> 
      )
    }
  }
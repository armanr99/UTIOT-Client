import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Creatable   } from 'react-select';

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        groupName: '',
        password: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
    }
    render() {
      return ( 
      <div className="login">
        <div className="signup_card">
          <div className="signup_card_logo">
            <a href="/">
              <img src={logo} alt="logo"/>
            </a>
          </div>
          <form className="signup_form login_form" onSubmit = {this.handleSubmit}>
              <div className="input_container" >
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    name="groupName"
                    value={this.state.groupName}
                    onChange={this.handleChange}
                    type="text" id="groupName" 
                    required />
                  <label for="groupName">Group Name</label>
              </div>
              <div className="input_container" >
                  <FontAwesomeIcon icon={faKey} />
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    id="password" 
                    required />
                  <label for="password">Password</label>
              </div>
              <input type="submit" className="signup_submit login_submit" value="LOGIN"/>
          </form>
        </div>
      </div> 
      )
    }
  }
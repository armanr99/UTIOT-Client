import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated,
  };
}

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: '',
        loading: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
    }

    handleSubmit (event) {
      this.setState({ loading: true });
      event.preventDefault();
      const data = this.state;
      let self = this;
  
      fetch('/api/group/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          password: data.password 
        })
      })
      .then(function(response) {
        self.setState({ loading: false });
        if(!response.ok) {
          toast.error('Wrong username or password!');
          throw new Error('login failed'); //what about a error managing system?!
        }
        else {
          toast.success('Login successful!')
          return response.json();
        }
      })
      .then(function(responseJson) {
        let token = responseJson.data.token;
        localStorage.setItem('token', token);
        let name = self.state.name;
        localStorage.setItem('groupName', name);
      }).then(function() {
        self.props.dispatch({ type: 'AUTHENTICATE_THE_USER' });
      })
      .catch(function (err) {
        console.log(err)
      })
    }
    render() {
      return ( 
      <div className="login">
        <div className="signup_card">
          <div className="signup_card_logo login_card_logo">
            <a href="/">
              <img src={logo} alt="logo"/>
            </a>
          </div>
          <form className="signup_form login_form" onSubmit = {this.handleSubmit}>
              <div className="input_container" >
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text" id="name" 
                    required />
                  <label for="name">Group Name</label>
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
              <PulseLoader
                sizeUnit={"px"}
                size={10}
                color={'#fff'}
                loading={this.state.loading}
              />
          </form>
          <div className="with_account"><p>Don't have an account?</p> <a href="/signup">Click here</a></div>
        </div>
      </div> 
      )
    }
  }

  export default connect(mapStateToProps)(Login);
import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { Creatable } from 'react-select';
import { toast } from 'react-toastify';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '', 
      password : '', 
      thingspeak: '',
      members: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
  }

  handleChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCreateChange(value) {
    this.setState({ members: value })
  }

  handleSubmit (event) {
    event.preventDefault();
    const data = this.state;

    fetch('/api/group/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if(!response.ok) {
        toast.error('Signup unsuccessful!');
        throw new Error('signup failed'); //what about a error managing system?!
      }
      else {
        toast.success('Signup successful!')
      }
    })
    .catch(function (err) {
      console.log(err)
    })
  }
  
  render() {
    return ( 
    <div className="signup">
      <div className="signup_card">
          <div className="signup_card_logo">
            <a href="/">
              <img src={logo} alt="logo"/>
            </a>
          </div>
          <form className="signup_form" onSubmit = {this.handleSubmit}>
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
              <div className="input_container" >
                  <FontAwesomeIcon icon={faLaptop} />
                  <input
                    name="thingspeak"
                    value={this.state.thingspeak}
                    onChange={this.handleChange}
                    type="text"
                    id="thingspeak" 
                    required />
                  <label for="thingspeak">Thingspeak</label>
              </div>
              <Creatable
                options = {this.state.members}
                isMulti = {true}
                placeholder = {'Write member names to add...'}
                style={{width: "300px"}}
                name="members"
                onChange={this.handleCreateChange}
              />
              <input type="submit" className="signup_submit" value="SIGNUP"/>
          </form>
          <div className="with_account"><p>Already have an account?</p> <a href="/login">Click here</a></div>
      </div>
    </div> 
    )
  }
}
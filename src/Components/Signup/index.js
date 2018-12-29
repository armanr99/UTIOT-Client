import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Creatable } from 'react-select';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName : '', 
      password : '', 
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
    let ob = this.state;
    let obj = JSON.stringify(ob);
    console.log(obj);
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
      </div>
    </div> 
    )
  }
}
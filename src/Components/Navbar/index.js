import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
}

handleLogout (event) {
    event.preventDefault();
    localStorage.clear();
    this.props.history.push('/');
}

render() {
    return ( 
    <div className="navbar">
        <ul className = "navbar_ul">
            <li className = "logout">
                <a href="/logout" onClick={e=>this.handleLogout(e)} >logout</a>
            </li>
            <li>
                <a href="/" >
                <img className="nav_logo" src={logo} alt="logo"/>
                </a>
            </li>
        </ul>
    </div> 
        )
    }
}

export default withRouter(Navbar);
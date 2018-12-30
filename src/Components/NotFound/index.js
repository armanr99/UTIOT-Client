import React from 'react';
import './style.css';


export default class NotFound extends React.Component {

    render() {
      return ( 
      <div className="not_found">
        <div className="not_found_card">
            <p>404</p>
            <p>Page not found!</p>
            <a href="/">home</a>
        </div>
      </div> 
      )
    }
  }

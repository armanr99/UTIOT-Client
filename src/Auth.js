import React from 'react';
import { store } from './Store';
import PropTypes from 'prop-types';

export default class Auth extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    };  

  componentDidMount() {
    this.handleLocationChange();
    this.unlisten = this.context.router.history.listen(
      this.handleLocationChange
    );
  }

  componentWillUnmount() {
    this.unlisten();
  }

  handleLocationChange() {
    window.scrollTo(0, 0);
    let token = localStorage.getItem('token');
    if (token) {
      store.dispatch({ type: 'AUTHENTICATE_THE_USER' });
    } else {
      store.dispatch({ type: 'DEAUTHENTICATE_THE_USER' });
    }
  }

  render() {
    return this.props.children;
  }
}

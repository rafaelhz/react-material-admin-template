import React from 'react';
import { browserHistory } from 'react-router-dom';

// Example user object singleton that emits a change event
// whenever its status changes.
import user from './user';

export default (InnerComponent) => {
  return React.createClass({
    checkAuth() {
      // Go to login route if user is not set.
      if(!user) {
        browserHistory.push('/login');
      }
    },
    componentDidMount() {
      // Check if user is authenticated on initial render
      this.checkAuth();

      // Check user object on change
      user.on('change', this.checkAuth);
    },
    componentWillUnmount() {
      // Remove our event listener
      user.off('change', this.checkAuth);
    },
    render() {
      // Render InnerComponent
      return (
        <InnerComponent />
      );
    }
  });
};

// https://mariopabon.com/2016/02/15/sharing-code-between-react-components.html

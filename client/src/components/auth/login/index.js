import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { loginUser } from '../duck';
import Login from './component';

class LoginContainer extends Component {
  componentDidMount() {
    this.props.isAuthenticated && this.props.history.push('/dashboard');
  }

  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
const withConnect = connect(mapStateToProps, { loginUser });

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default compose(
  withRouter,
  withConnect
)(LoginContainer);

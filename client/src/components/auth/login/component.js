import React from 'react';
import PropTypes from 'prop-types'
import Form from './form';

const Login = (props) => (
  <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">Sign in to your DevConnector account</p>
          <Form onSubmit={(data) =>props.loginUser(data, props.history)} />
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Login;

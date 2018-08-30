import React from 'react';
import PropTypes from 'prop-types'
import RegisterForm from './form';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import { registerUser } from '../duck';


const Register = (props) => (
  <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <RegisterForm errors={props.errors} onSubmit={(data) => props.registerUser(data, props.history)} />
        </div>
      </div>
    </div>
  </div>
);

Register.propTypes = {
  history: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const withConnect = connect(null, {registerUser});

export default compose(
  withConnect,
  withRouter
)(Register) ;

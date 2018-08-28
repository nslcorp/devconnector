import React from 'react';
import RegisterForm from './form';

const onSubminLog = fields => console.log('here...', fields);

const Register = (props) => (
  <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <RegisterForm onSubmit={onSubminLog} />
        </div>
      </div>
    </div>
  </div>
);

Register.propTypes = {};

export default Register;

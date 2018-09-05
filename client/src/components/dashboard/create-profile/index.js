import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from './form';
import { doCreateProfile } from '../actions';

class CreateProfile extends Component {
  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>

              <Form onSubmit={data => this.props.doCreateProfile(data, this.props.history)} />
              {/*{*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  doCreateProfile: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired
};

const withConnect = connect(null, { doCreateProfile });
export default compose(
  withConnect,
  withRouter
)(CreateProfile);

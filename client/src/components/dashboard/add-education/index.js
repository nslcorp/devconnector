import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { doAddEducation } from '../actions';
import AddEducationForm from './form'

const AddEducation = (props) => (
  <div className="add-education">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <Link to="/dashboard" className="btn btn-light">
            Go Back
          </Link>
          <h1 className="display-4 text-center">Add Education</h1>
          <p className="lead text-center">
            Add any school, bootcamp, etc that you have attended
          </p>
          <small className="d-block pb-3">* = required fields</small>
          <AddEducationForm onSubmit={data => props.doAddEducation(data, props.history)} />



        </div>
      </div>
    </div>
  </div>
);

AddEducation.propTypes = {
  doAddEducation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const withConnect = connect(null, {doAddEducation});

export default compose(
  withRouter,
  withConnect
)(AddEducation);

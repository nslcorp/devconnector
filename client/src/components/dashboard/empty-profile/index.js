import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EmptyProfile = ({name}) => (
  <div>
    <p className="lead text-muted">Welcome {name}</p>
    <p>You have not yet setup a profile, please add some info</p>
    <Link to="/create-profile" className="btn btn-lg btn-info">
      Create Profile
    </Link>
  </div>
);

EmptyProfile.propTypes = {
  name: PropTypes.string.isRequired
};

export default EmptyProfile;

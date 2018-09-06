import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { user, company, status, handle, location } = props;
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" src={user.avatar} alt="avatar" />
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{user.name}</h3>
          <p>{status}</p>
          <p>{location}</p>
          <Link to={`/profile/${handle}`} className="btn btn-info">View Profile</Link>
        </div>
        <div className="col-md-4 d-none d-lg-block">
          <h4>Skill Set</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fa fa-check pr-1"></i>HTML
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
  handle: PropTypes.string.isRequired,
  company: PropTypes.string,
  location: PropTypes.string,
  status: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape).isRequired
};

Profile.defaultProps = {
  company: "-",
  location: "--",
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';

const UserLink = ({logoutUser, user}) => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a href="" onClick={logoutUser} className="nav-link">
        <img className="rounded-circle" src={user.avatar} alt={user.name} style={{ width: '25px', marginRight: '5px' }} />
        {' '}Logout
      </a>
    </li>
  </ul>
);

UserLink.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
};

export default UserLink;

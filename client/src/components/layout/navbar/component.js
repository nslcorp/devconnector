import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GuestLink from './guest-link';
import UserLink from './user-link';


const Navbar = (props) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        DevConnector
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profiles">
              {' '}
              Developers
            </Link>
          </li>
        </ul>
        {
          props.isAuthenticated ?
            <UserLink logoutUser={props.logoutUser} /> :
            <GuestLink />
        }
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navbar;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doGetProfile } from './actions';
import { getIsLoading, getProfile } from './reducer';
import { isEmpty } from '../../utils';
import { getAuth } from '../auth/duck';
import EmptyProfile from './empty-profile';
import ProfileActions from './profile-actions';
import Spinner from '../../shared/spinner';


class Dashboard extends Component {

  componentDidMount() {
    this.props.doGetProfile();
  }




  render() {

    const isEmptyProfile = isEmpty(this.props.profile);
    if (this.props.loading) return <Spinner />;

    if (isEmptyProfile) return <EmptyProfile name={this.props.userName} />;

    return (
      <div>
        <h3>Dashboard here...</h3>
        <ProfileActions />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: getAuth(state).user.name,
  loading: getIsLoading(state),
  profile: getProfile(state)
});
const withConnect = connect(mapStateToProps, { doGetProfile });

export default withConnect(Dashboard);




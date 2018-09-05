import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doGetProfile } from './actions';
import { getIsLoading, getProfile } from './reducer';
import { isEmpty } from '../../utils';
import Spinner from '../../shared/spinner';
import EmptyProfile from './empty-profile';
import { getAuth } from '../auth/duck';

class Dashboard extends Component {

  componentDidMount() {
    this.props.doGetProfile();
  }

  render() {

    const isEmptyProfile = isEmpty(this.props.profile);
    //if (isEmptyProfile || this.props.loading) return <Spinner />;

    if (isEmptyProfile) return <EmptyProfile name={this.props.userName} />;

    return (
      <div>Dashboard</div>
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




import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfile } from './actions';
import Spinner from '../../shared/spinner';
import { getIsProfileLoading } from './reducer';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    if (this.props.loading) return <Spinner />;

    return (
      <div>Dashboard</div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getIsProfileLoading(state)
});
const withConnect = connect(mapStateToProps, { getProfile });

export default withConnect(Dashboard);




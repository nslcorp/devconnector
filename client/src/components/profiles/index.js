import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { doGetProfiles } from './actions';
// import { isEmpty } from '../../utils';
import * as selectors from './reducer';
import Spinner from '../../shared/spinner';


class ProfilesContainer extends Component {
  componentDidMount(){
    this.props.doGetProfiles()
  }
    render(){
      // const isEmptyProfiles = isEmpty(this.props.profiles);
      if (this.props.loading) return <Spinner />;


      return (
        <div>
          <h1>Developer Profiles</h1>
        </div>
      );
    }
}

ProfilesContainer.propTypes = {
  doGetProfiles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape).isRequired
};

const mapStateToProps = state => ({
  profiles: selectors.getProfiles(state),
  loading: selectors.getIsLoading(state)
});
const withConnect = connect(mapStateToProps, {doGetProfiles});
export default withConnect(ProfilesContainer);

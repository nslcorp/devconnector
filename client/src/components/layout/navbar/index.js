import { connect } from 'react-redux';
import { logoutUser } from '../../auth/duck';
import Component from './component';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const withConnect = connect(mapStateToProps, { logoutUser });

export default withConnect(Component);

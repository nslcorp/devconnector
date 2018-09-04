import { connect } from 'react-redux';
import { getIsAuthenticated, logoutUser } from '../../auth/duck';
import Component from './component';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const withConnect = connect(mapStateToProps, { logoutUser });

export default withConnect(Component);

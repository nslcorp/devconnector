import { connect } from 'react-redux';
import Component from './component';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const withConnect = connect(mapStateToProps);

export default withConnect(Component);

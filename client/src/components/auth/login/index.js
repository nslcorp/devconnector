import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux';

import { loginUser } from '../duck';
import Component from './component';

const withConnect = connect(null, {loginUser});

export default compose(
  withRouter,
  withConnect
)(Component) ;

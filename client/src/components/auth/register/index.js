import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import { registerUser } from '../duck';
import Component from './component';

const withConnect = connect(null, {registerUser});

export default compose(
  withConnect,
  withRouter
)(Component) ;

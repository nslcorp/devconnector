import {connect} from 'react-redux'

import { loginUser } from '../duck';
import Component from './component';

const withConnect = connect(null, {loginUser});

export default withConnect(Component) ;

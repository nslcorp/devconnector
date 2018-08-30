import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import auth from '../components/auth/duck'
import errors from '../shared/errors/redux'

export default combineReducers({
  auth,
  errors,
  form
})

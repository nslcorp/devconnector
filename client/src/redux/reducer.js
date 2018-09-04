import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import auth from '../components/auth/duck'
import dashboard from '../components/dashboard/reducer'
import errors from '../shared/errors/redux'

export default combineReducers({
  auth,
  dashboard,
  errors,
  form
})

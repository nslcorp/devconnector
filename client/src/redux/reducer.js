import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import auth from '../components/auth/duck'
import dashboard from '../components/dashboard/reducer'

export default combineReducers({
  auth,
  dashboard,
  form
})

import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import auth from '../components/auth/reducer'

export default combineReducers({
  auth,
  form
})

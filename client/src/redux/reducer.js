import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from '../components/auth/duck';
import dashboard from '../components/dashboard/reducer';
import profiles from '../components/profiles/reducer';

export default combineReducers({
  form,
  auth,
  dashboard,
  profiles,

});

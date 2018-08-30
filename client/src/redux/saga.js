import {all} from 'redux-saga/effects'

import {saga as authSaga} from '../components/auth/duck'

export default function * rootSaga() {
  yield all([
    authSaga()
  ])
}

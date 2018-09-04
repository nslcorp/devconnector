import { all } from 'redux-saga/effects';

import { saga as authSaga } from '../components/auth/duck';
import { saga as dashboardSaga } from '../components/dashboard/saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    dashboardSaga()
  ]);
}



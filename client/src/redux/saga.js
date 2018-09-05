import { all } from 'redux-saga/effects';

import { saga as authSaga } from '../components/auth/duck';
import { saga as dashboardSaga } from '../components/dashboard/saga';
import { saga as profilesSaga } from '../components/profiles/saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    dashboardSaga(),
    profilesSaga()
  ]);
}



import { all, put, takeEvery } from 'redux-saga/effects';
import * as types from './types';
import { api } from '../../api';

const getProfileSaga = function* () {

  try {
    const profile = yield api.get('/api/profile');
    yield put({ type: types.GET_PROFILE_SUCCESS, payload: profile });
  }
  catch (error) {
    throw error;
  }

};


export const saga = function* () {
  yield all([
    takeEvery("GET_PROFILE_REQUEST", getProfileSaga)
  ]);

};

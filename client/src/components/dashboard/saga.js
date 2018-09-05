import { all, put, takeEvery } from 'redux-saga/effects';
import * as types from './types';
import { api } from '../../api';

const getProfileSaga = function* () {

  try {
    const profile = yield api.get('/api/profile');
    console.log(profile)
    yield put({ type: types.GET_PROFILE_SUCCESS, payload: profile });
  }
  catch (error) {
    yield put({ type: types.GET_PROFILE_ERROR, payload: error.response });
  }

};


export const saga = function* () {
  yield all([
    takeEvery("GET_PROFILE_REQUEST", getProfileSaga)
  ]);

};

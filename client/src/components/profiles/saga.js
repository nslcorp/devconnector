import { all, put, takeEvery } from 'redux-saga/effects';
import * as types from './types';
import { api } from '../../api';

const getProfilesSaga = function* () {

  try {
    const profiles = yield api.get('/api/profile/all');
    console.log(profiles);
    yield put({ type: types.GET_PROFILES_SUCCESS, payload: profiles });
  }
  catch (error) {
    yield put({ type: types.GET_PROFILES_ERROR, payload: error.response });
  }
};

export const saga = function* () {
  yield all([
    takeEvery(types.GET_PROFILES_REQUEST, getProfilesSaga),
  ]);

};

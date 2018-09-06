import { all, put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import * as types from './types';
import { api } from '../../api';
import { stopSubmit } from 'redux-form';

const getProfileSaga = function* () {

  try {
    const profile = yield api.get('/api/profile');
    console.log(profile);
    yield put({ type: types.GET_PROFILE_SUCCESS, payload: profile });
  }
  catch (error) {
    yield put({ type: types.GET_PROFILE_ERROR, payload: error.response });
  }
};

const createProfileSaga = function* (action) {
  try {
    const profile = yield api.post('/api/profile', action.payload.data);
    yield put({ type: types.CREATE_PROFILE_SUCCESS, payload: profile });
    yield call(action.payload.history.push, '/dashboard');
  }
  catch (error) {
    yield put(stopSubmit('create-profile', error));
    yield put({ type: types.CREATE_PROFILE_ERROR, payload: error });
  }
};

const addEducationSaga = function* (action) {
  try {
    yield api.post('/api/profile/education', action.payload.data);
    yield call(action.payload.history.push, '/dashboard');
  }
  catch (error) {
    yield put(stopSubmit('add-education', error));
    yield put({ type: types.ADD_EDUCATION_ERROR, payload: error });
  }
};


export const saga = function* () {
  yield all([
    takeEvery(types.GET_PROFILE_REQUEST, getProfileSaga),
    takeLatest(types.CREATE_PROFILE_REQUEST, createProfileSaga),
    takeLatest(types.ADD_EDUCATION_REQUEST, addEducationSaga),
  ]);

};

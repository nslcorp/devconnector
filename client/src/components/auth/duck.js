import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';


export const registerUser = data => ({
  type: REGISTER_USER,
  payload: data
});


const registerUserAxios = data => axios.post('/api/users/register', data).then(resp => resp.data);

export const signUpSaga = function* (action) {

  try {
    const user = yield registerUserAxios(action.payload);
    yield put({
      type: REGISTER_USER_SUCCESS,
      payload: { user }
    });

  }
  catch (error) {
    yield put({
      type: REGISTER_USER_ERROR,
      payload: error.response.data
    });
  }


  // try {
  //
  //
  // } catch (error) {
  //   yield put({
  //     type: REGISTER_USER_ERROR,
  //     payload: error
  //   });
  // }
};

export const saga = function* () {
  yield all([
    takeLatest(REGISTER_USER, signUpSaga),
  ]);
};



import { all, call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { isEmpty } from '../../utils';
import * as utils from './utils';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';


export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';


const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    name: '',
    avatar: ''
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER_REQUEST:
      return {
        isAuthenticated: true,
        user: payload
      };

    case LOGIN_USER_SUCCESS:
      return {
        isAuthenticated: true,
        user: payload
      };
    case LOGIN_USER_ERROR:
      return {
        isAuthenticated: false,
      };
    case LOGOUT_SUCCESS:
      return {
        user: payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}


export const registerUser = (data, history) => ({
  type: REGISTER_USER_REQUEST,
  payload: { data, history }
});
export const loginUser = (data, history) => ({
  type: LOGIN_USER_REQUEST,
  payload: {data, history}
});
export const setUser = (decoded) => ({
  type: LOGIN_USER_SUCCESS,
  payload: decoded
});
export const logoutUser = () => ({
  type: LOGOUT_REQUEST
});


const api = {
  post: (url, data) => axios.post(url, data).then(resp => resp.data).catch(err => {
    throw err.response.data;
  }),
  get: url => axios.get(url).then(resp => resp.data).catch(err => {
    console.log(err.response);
    throw err.response.data;
  })
};


export const signUpSaga = function* (action) {

  try {
    const user = yield call(api.post, '/api/users/register', action.payload.data);

    yield put({
      type: REGISTER_USER_SUCCESS,
      payload: user
    });

    yield call(action.payload.history.push, '/login');
  }

  catch (error) {
    yield put(stopSubmit('register', error.response.data));
  }
};

export const loginSaga = function* (action) {

  try {
    const { token } = yield call(api.post, '/api/users/login', action.payload.data);

    yield call(utils.setAuthToken, token);

    const decoded = yield call(jwt_decode, token);

    if (isEmpty(decoded)) {
      yield put({ type: LOGIN_USER_ERROR });
    }
    else {
      yield put(setUser(decoded));
      yield call(action.payload.history.push, '/');
    }
  }

  catch (error) {
    yield put(stopSubmit('login', error));
  }
};

export const logoutSaga = function* () {
  try {
    yield call(utils.removeAuthToken, false);
    yield put({ type: LOGIN_USER_SUCCESS, payload: {} });
  }
  catch (error) {
    yield put({ type: LOGOUT_ERROR, payload: {} });
  }

};

export const saga = function* () {
  yield all([
    takeLatest(REGISTER_USER_REQUEST, signUpSaga),
    takeLatest(LOGIN_USER_REQUEST, loginSaga),
    takeLatest(LOGOUT_REQUEST, logoutSaga),
  ]);
};


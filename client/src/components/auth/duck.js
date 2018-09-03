import { all, call, put, takeLatest, take } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { isEmpty, setAuthToken } from '../../utils';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';


export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';


const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
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
export const loginUser = (data) => ({
  type: LOGIN_USER_REQUEST,
  payload: data
});
export const setUser = (decoded) => ({
  type: LOGIN_USER_SUCCESS,
  payload: decoded
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
    const { token } = yield call(api.post, '/api/users/login', action.payload);

    localStorage.setItem('jwtToken', token);

    yield call(setAuthToken, token);

    const decoded = yield call(jwt_decode, token);

    if (isEmpty(decoded)) {
      yield put({ type: LOGIN_USER_ERROR });
    }
    else {
      console.log(decoded)
      yield put(setUser(decoded));
    }
  }

  catch (error) {
    yield put(stopSubmit('login', error));
  }
};

export const saga = function* () {
  yield all([
    takeLatest(REGISTER_USER_REQUEST, signUpSaga),
    takeLatest(LOGIN_USER_REQUEST, loginSaga),
  ]);
};

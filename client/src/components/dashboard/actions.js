import * as types from './types';

export const doGetProfile = () => ({
  type: types.GET_PROFILE_REQUEST
});

export const doCreateProfile = (data, history) => ({
  type: types.CREATE_PROFILE_REQUEST,
  payload: { data, history }
});
export const doAddEducation = (data, history) => ({
  type: types.ADD_EDUCATION_REQUEST,
  payload: { data, history }
});


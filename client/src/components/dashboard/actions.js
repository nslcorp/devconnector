import { CREATE_PROFILE_REQUEST, GET_PROFILE_REQUEST } from './types';

export const doGetProfile = () => ({
  type: GET_PROFILE_REQUEST
});

export const doCreateProfile = (data, history) => ({
  type: CREATE_PROFILE_REQUEST,
  payload: {data, history}
})

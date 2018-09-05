import * as types from './types';

const initialState = {
  profile: null,
  profiles: null,
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload
      };

    default:
      return state;

  }
}

export const getDashboard = state => state.dashboard;
export const getProfile = state => getDashboard(state).profile;
export const getIsLoading = state => getDashboard(state).isLoading;

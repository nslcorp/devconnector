import * as types from './types';

const initialState = {
  entities: [],
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PROFILES_SUCCESS:
      return {
        entities: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const getProfiles = state => state.profiles.entities;
export const getIsLoading = state => state.profiles.isLoading;

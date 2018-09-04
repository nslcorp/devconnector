import * as types from './types';

const initialState = {
  profile: null,
  profiles: null,
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload
      };

    default:
      return state;

  }
}

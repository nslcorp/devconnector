import * as types from './duck';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };

    case types.REGISTER_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        errors: payload
      };
    default:
      return state;
  }

}

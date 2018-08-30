import * as types from './duck';

const initialState = {
  errors: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ERRORS:
      return {
        ...state,
        errors: payload
      };

    default:
      return state;
  }

}

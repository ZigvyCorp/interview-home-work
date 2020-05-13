import * as actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  const response = action.response;
  switch (action.type) {
    case actionTypes.CLEAR_AUTH_ERROR_STATUS:
      return { ...state, response: { ...response, error: "" } };

    case actionTypes.LOG_IN_SUCCEED:
      return { ...state, response };

    case actionTypes.SIGN_UP_SUCCEED:
      return { ...state, response };

    case actionTypes.SIGN_OUT:
      console.log(action, state);
      return { ...state, response: "" };

    default:
      return state;
  }
};

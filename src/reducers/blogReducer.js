import * as actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CREATE_POST_STATUS:
      return {
        ...state,
        error: "",
        success: "",
      };

    case actionTypes.CREATE_POST_SUCCEED:
      return {
        ...state,
        error: action.response.data.error,
        success: action.response.data.success,
      };

    case actionTypes.GET_POSTS_SUCCEED:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

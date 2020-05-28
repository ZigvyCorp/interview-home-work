import * as actionTypes from "../utils/action-types";

const initialState = {
  isLogin: false,
  user: null,
  users: [],
};

const userState = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        users: [],
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: data,
      };
    case actionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        users: [],
      };
    case actionTypes.FETCH_USER:
      return {
        ...state,
        user: null,
        isLogin: false,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: data,
        isLogin: true,
      };
    case actionTypes.FETCH_USER_FAILED:
      return {
        ...state,
        users: null,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default userState;

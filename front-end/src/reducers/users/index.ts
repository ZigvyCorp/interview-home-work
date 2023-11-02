import * as ACTION_TYPE from "../../types/users/actionTypes";
import * as TYPE from "../../types/users";

const initialState: TYPE.UserState = {
  pending: false,
  user: {
    _id: "",
    username: "",
    password: "",
    name: "",
    dob: "",
  },
  error: null,
};

export function userReducer(
  state = initialState,
  action: TYPE.UserActions
): TYPE.UserState {
  switch (action.type) {
    case ACTION_TYPE.GET_USER_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.GET_USER_SUCCESS: {
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    }
    case ACTION_TYPE.GET_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: {
          _id: "",
          username: "",
          password: "",
          name: "",
          dob: "",
        },
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}

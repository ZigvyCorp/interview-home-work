import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/authActions";

const initialState = {
  token: null,
  apiRequest: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, apiRequest: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        apiRequest: false,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        apiRequest: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        apiRequest: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

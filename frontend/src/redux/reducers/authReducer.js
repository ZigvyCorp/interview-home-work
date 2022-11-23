import {
  LOGIN_LOADING_OFF,
  LOGIN_LOADING_ON,
  LOG_IN_FAILED,
  LOG_IN_SUCCEEDED,
  LOG_OUT,
} from "../types/authType";

const defaultAuthState = {
  token: null,
  user: null,
  error: "",
  loading: false,
};

function authReducer(state = defaultAuthState, action) {
  switch (action.type) {
    case LOG_IN_SUCCEEDED:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOG_IN_FAILED:
      return { ...state, error: action.payload.error };
    case LOG_OUT:
      return { ...state, token: null, user: null };
    case LOGIN_LOADING_OFF:
      return { ...state, loading: false };
    case LOGIN_LOADING_ON:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default authReducer;

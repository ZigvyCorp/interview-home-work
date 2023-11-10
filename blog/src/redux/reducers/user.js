import { INIT_STATE } from "../constant/index";
import { login, getType, logout } from "../actions";

export default function userReducers(state = INIT_STATE.user, action) {
  switch (action.type) {
    case getType(login.getLoginRequest):
      return {
        ...state,
        isLoggined: true,
      };
    case getType(login.getLoginSuccess):
      return {
        ...state,
        isLoggined: true,
        user: action.payload,
      };
    case getType(login.getLoginFailure):
      return {
        ...state,
        isLoggined: false,
      };
    case getType(logout):
      return {
        state: INIT_STATE.user,
        isLoggined: false,
      };
    default:
      return state;
  }
}

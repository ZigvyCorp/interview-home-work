import { RootState } from "../../store/configureStore";
import { UserState } from "../../types/User/types";
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_FAILURE,
  GET_CURRENT_USER_SUCCESS,
  GET_SUGGEST_USER,
  GET_SUGGEST_USER_FAILURE,
  GET_SUGGEST_USER_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/actions";
import {
  UserAction,
  getCurrentUserSuccess,
  getSuggestUserSuccess,
  loginSuccess,
} from "../actions/userActions";

const initialState: UserState = {
  users: [],
  loading: false,
  isAuthenticated: false,
  error: null,
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case GET_SUGGEST_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_SUGGEST_USER_SUCCESS:
      const successAction = action as ReturnType<typeof getSuggestUserSuccess>;
      return {
        ...state,
        users: successAction.payload,
        loading: false,
      };
    case GET_SUGGEST_USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const loginSuccessAction = action as ReturnType<typeof loginSuccess>;
      localStorage.setItem("token", loginSuccessAction.payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      const currentUserAction = action as ReturnType<
        typeof getCurrentUserSuccess
      >;
      return {
        ...state,
        currentUser: currentUserAction.payload,
        isAuthenticated: true,
        loading: false,
      };
    case GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const selectUserList = (state: RootState) => state.user.users;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userReducer;

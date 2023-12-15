import { RootState } from "../store/configStore";
import { UserInitState } from "types/userType";
import { 
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "constants/actionRedux";
import {
  UserAction
} from "../actions/userActions";

const initialState: UserInitState = {
  loading: false,
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
   
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userReducer;

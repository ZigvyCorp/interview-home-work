import { UserState, UserAction } from "../types";

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

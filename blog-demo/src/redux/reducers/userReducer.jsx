import { GET__USERS } from "../../types/postComponent";
import dataUserLogin from "../../data/users.json";

const stateDefault = {
  userStore: [],
  userLogin: dataUserLogin,
};

export const userReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET__USERS: {
      state.userStore = [...action.userStore];
      return { ...state };
    }
    default:
      return { ...state };
  }
};

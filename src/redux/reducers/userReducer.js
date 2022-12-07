import { GET_USERS_SUCCESS } from "../constants/userConstant";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return { ...state };
  }
};

export default userReducer;

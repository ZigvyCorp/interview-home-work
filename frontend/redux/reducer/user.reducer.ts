import { FETCH_USERS_ERR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../action/user.action";

const userReduce = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, users: action.payload };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_ERR:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default userReduce;

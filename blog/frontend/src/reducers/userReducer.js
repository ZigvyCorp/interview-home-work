import { SET_USERS } from '../constants/userConstants';

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

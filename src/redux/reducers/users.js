import { handleGetUsers } from "../sagas/handles/users";

export const GET_USERS = "GET_USERS";
const SET_USERS = "SET_USERS";

export const getUsers = () => ({
  type: GET_USERS
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users
});

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const { users } = action;
      return { ...state, users };
    default:
      return state;
  }
};
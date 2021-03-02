import { GET_USERS, SET_USERS } from '../constants/userConstants';

export const getUsers = () => ({
  type: GET_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

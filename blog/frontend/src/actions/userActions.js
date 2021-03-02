import {
  GET_USERS,
  SET_USERS,
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from '../constants/userConstants';

// Get users
export const getUsers = () => ({
  type: GET_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

// Get single user
export const getUserById = (userId) => ({
  type: USER_FETCH_REQUEST,
  payload: { userId },
});

export const setUserById = (user) => ({
  type: USER_FETCH_SUCCESS,
  payload: user,
});

export const getUserByIdFailed = (error) => ({
  type: USER_FETCH_FAIL,
  payload: error,
});

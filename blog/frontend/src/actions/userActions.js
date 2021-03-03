import {
  USERS_FETCH_FAIL,
  USERS_FETCH_REQUEST,
  USERS_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
} from '../constants/userConstants';

// Get users
export const getUsers = () => ({
  type: USERS_FETCH_REQUEST,
});

export const setUsers = (users) => ({
  type: USERS_FETCH_SUCCESS,
  payload: users,
});

export const getUsersFailed = (error) => ({
  type: USERS_FETCH_FAIL,
  payload: error,
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

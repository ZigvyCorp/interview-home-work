// src/redux/actions/userActions.js

import axios from "axios";
import { Form, Input, Button, message, Row, Col, Card } from "antd";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/authConstants";
// src/redux/actions/authActions.js

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      // Make an API request to authenticate the user
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      // Assuming the response contains a token or user data
      const { token, user } = response.data;

      // Dispatch the success action with the token or user data
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user },
      });
      return { token, user };
    } catch (error) {
      // Dispatch the failure action with the error message
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
// Fetch users action
export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      // Make an API request to fetch users
      const response = await axios.get("/api/users");

      // Dispatch the success action with the fetched users
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch the failure action with the error message
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Create user action
export const register = (username, password) => {
  console.log("response", username, password);
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });

    try {
      // Make an API request to create a user
      const response = await axios.post("http://localhost:3000/users", {
        username: username,
        password: password,
      });

      // Dispatch the success action with the created user
      // Check if the response object is defined before accessing its status property

      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (error) {
      dispatch({
        type: CREATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Update user action
export const updateUser = (userId, userData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });

    try {
      // Make an API request to update a user
      const response = await axios.put(`/api/users/${userId}`, userData);

      // Dispatch the success action with the updated user
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch the failure action with the error message
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Delete user action
export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });

    try {
      // Make an API request to delete a user
      await axios.delete(`/api/users/${userId}`);

      // Dispatch the success action with the deleted user ID
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: userId,
      });
    } catch (error) {
      // Dispatch the failure action with the error message
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

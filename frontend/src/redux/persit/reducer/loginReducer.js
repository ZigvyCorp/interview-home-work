import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//! Action creator for logging in
const login = createAsyncThunk(
  "user/login",
  async (userCredentials, { dispatch }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/user/login`,
        userCredentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  }
);

// Reducer to handle login actions
const loginReducer = (
  state = { username: "", name: "", login_status: false },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // Update state with user data and login status
      return { ...action.payload, login_status: true };
    case "LOGIN_FAILURE":
      // Handle login failure
      console.error("Login failed:", action.payload);
      // You might want to reset state or handle the failure differently
      return { login_status: false };
    default:
      return state;
  }
};

export { loginReducer, login };

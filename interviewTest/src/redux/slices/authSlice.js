const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  userId: null,
  error: false,
};

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart(state, action) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload.message;
      state.isLoggedIn = false;
    },

    loginStart(state, action) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userId = action.payload.user_Id;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload?.message;
      state.isLoggedIn = false;
    },
    clearError(state, action) {
      state.error = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;

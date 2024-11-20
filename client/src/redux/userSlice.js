import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    sender: {
      user: null,
    },
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
      allNumber: [],
    },
    user: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailed } =
  userSlice.actions;

export default userSlice.reducer;

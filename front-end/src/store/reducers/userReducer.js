import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleGetUsers: (state) => {
      state.isLoading = true;
    },
    handleGetUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    handleGetUsersFailure: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;
export const { handleGetUsers, handleGetUsersSuccess, handleGetUsersFailure } =
  actions;
export default userReducer;

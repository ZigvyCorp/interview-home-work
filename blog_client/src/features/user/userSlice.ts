import { RootState } from "../../app/store";
import { User } from "./../../models/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  loading: boolean;
  users: User[];
}

const initialState: UserState = {
  loading: false,
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUserList(state) {
      state.loading = true;
    },
    fetchUserListSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUserListFailed(state) {
      state.loading = false;
    },
  },
});

//Actions
export const userActions = userSlice.actions;

//// Selectors
export const selectUserList = (state: RootState) => state.users.users;
export const selectUserLoading = (state: RootState) => state.users.loading;

//Reducers
export default userSlice.reducer;

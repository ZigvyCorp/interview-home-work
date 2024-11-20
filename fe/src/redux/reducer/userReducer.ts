import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../../models/UserModel";

interface UserState {
  isLoading?: boolean;
  currentUser?: User | null;
}

const initialState: UserState = {
  isLoading: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      action.payload && alert(action.payload);
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, loginFailed, loginSuccess, logout } = userSlice.actions;
export const UserState = (state: RootState) => state.user;
export default userSlice.reducer;

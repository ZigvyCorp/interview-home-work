import { IUser } from "@/common/@types/types";
import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthenticated: boolean;
  user: IUser | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const { reducer: authReducer } = authSlice;
export const authAction = authSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import IUser from "../interface/IUser";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  try {
    const res = await axios.get("users");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: initialState,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default userSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import IUser from "../../interface/IUser";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const res = await axios.get("users");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const fetchUserById = createAsyncThunk(
  "fetchUserById",
  async (userId: string) => {
    try {
      const res = await axios.get(`users/${userId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export interface UserState {
  users: IUser[];
  userDetail?: IUser;
}

const initialState: UserState = {
  users: [],
  userDetail: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: initialState,
    error: false,
  },
  extraReducers: (builder) => {
    //fetchUsers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = true;
    });

    //fetchUserById
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.userDetail = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default userSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(baseUrl + "/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { data: [], user: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default userSlice.reducer;

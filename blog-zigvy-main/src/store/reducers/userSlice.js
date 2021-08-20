import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Reducer thunk
// fetch API getAllProduct
export const getAllUser = createAsyncThunk("post/getalluser", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  return response.data;
});
export const getSingleUser = createAsyncThunk(
  "post/getsingleUser",
  async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    singleUser: {},
  },
  reducers: {},
  extraReducers: {
    [getAllUser.fulfilled]: (state, action) => {
      console.log("Done");
      state.user = action.payload;
    },
    //get single post
    [getSingleUser.fulfilled]: (state, action) => {
      console.log("Done");
      state.singleUser = action.payload;
    },
  },
});

//creat reducer
const userReducer = userSlice.reducer;

//export selector
export const userSelector = (state) => state.userReducer.user;
export const singleUserSelector = (state) => state.userReducer.singleUser;

//export action

//export reducer
export default userReducer;

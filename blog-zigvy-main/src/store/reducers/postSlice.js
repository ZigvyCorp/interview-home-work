import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Reducer thunk
// fetch API getAllpost
export const getAllpost = createAsyncThunk("post/getallpost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  return response.data;
});
export const getSinglepost = createAsyncThunk(
  "post/getsinglepost",
  async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    allpost: [],
    searchvalue: "",
    singlepost: {},
  },
  reducers: {
    SearchFilter(state, action) {
      state.searchvalue = action.payload;
    },
    emtySinglepost(state, action) {
      state.singlepost = "";
    },
  },
  extraReducers: {
    // Get all todos
    [getAllpost.fulfilled]: (state, action) => {
      console.log("Done");
      state.allpost = action.payload;
    },
    //get single post
    [getSinglepost.fulfilled]: (state, action) => {
      console.log("Done");
      state.singlepost = action.payload;
    },
  },
});

//creat reducer
const postReducer = postSlice.reducer;

//export selector
export const postSelector = (state) => state.postReducer.allpost;
export const searchSelector = (state) => state.postReducer.searchvalue;
export const singlepostSelector = (state) => state.postReducer.singlepost;

//export action

export const { SearchFilter, emtySinglepost } = postSlice.actions;

//export reducer
export default postReducer;

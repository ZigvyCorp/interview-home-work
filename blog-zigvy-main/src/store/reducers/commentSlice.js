import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Reducer thunk
// fetch API getAllProduct
export const getAllComment = createAsyncThunk(
  "comment/getallcoment",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {}
    );
    return response.data;
  }
);
export const getSingleComment = createAsyncThunk(
  "comment/getsinglecomment",
  async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}/`
    );
    return response.data;
  }
);
const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
    singleComment: {},
  },
  reducers: {},
  extraReducers: {
    [getAllComment.fulfilled]: (state, action) => {
      console.log("Done");
      state.comment = action.payload;
    },
    [getSingleComment.fulfilled]: (state, action) => {
      console.log("Done");
      state.singleComment = action.payload;
    },
  },
});

//creat reducer
const commentReducer = commentSlice.reducer;

//export selector
export const commentSelector = (state) => state.commentReducer.comment;
export const commentSingleSelector = (state) =>
  state.commentReducer.singleComment;

//export action

// export const { addProductTocomment, DeleteProductTocomment, DeleteAllProduct } =
//   commentSlice.actions;

//export reducer
export default commentReducer;

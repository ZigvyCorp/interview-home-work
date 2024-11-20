import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as apis from "../../apis";
import { PostState } from "../module";

const initialState: PostState = {
  loading: false,
  posts: [],
};

export const getPosts = createAsyncThunk(
  "post/postsFetch",
  async (data: any, { rejectWithValue }) => {
    const response: any = await apis.apiGetAllPosts(data);
    if (response.status === 200) {
      return response.data;
    }
    return rejectWithValue(response);
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action: any) => {
      state.loading = false;
      state.posts = [];
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;

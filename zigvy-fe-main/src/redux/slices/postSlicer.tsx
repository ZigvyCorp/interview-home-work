import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (search: string) => {
    try {
      const res = await axios.get("posts", {
        params: {
          title_like: `^${search}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchPostsInPage = createAsyncThunk(
  "fetchPostsInPage",
  async ({ page, search }: { page: number; search: string }) => {
    try {
      const res = await axios.get("posts", {
        params: {
          _start: (page - 1) * 5,
          _limit: 5,
          title_like: `^${search}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchDetailPost = createAsyncThunk(
  "fetchDetailPost",
  async (postId: string) => {
    try {
      const res = await axios.get(`posts/${postId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export interface PostState {
  post: IPost[];
  postDetail?: IPost;
  postLength: number;
}

const initialState: PostState = {
  post: [],
  postDetail: undefined,
  postLength: 0,
};

const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: initialState,
    error: false,
  },
  extraReducers: (builder) => {
    //fetchPost

    builder.addCase(fetchPosts.pending, (state, action) => {
      state.error = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data.postLength = action.payload.length;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = true;
    });

    //fetchPostInPage

    builder.addCase(fetchPostsInPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPostsInPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.post = action.payload;
    });
    builder.addCase(fetchPostsInPage.rejected, (state, action) => {
      state.error = true;
    });

    //fetchDetailPost

    builder.addCase(fetchDetailPost.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchDetailPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.postDetail = action.payload;
    });
    builder.addCase(fetchDetailPost.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default postSlice;

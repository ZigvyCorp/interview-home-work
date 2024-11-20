import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
  "fetchPost",
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

export const fetchPostInPage = createAsyncThunk(
  "fetchPostInPage",
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

export interface PostState {
  post: IPost[];
  postLength: number;
}

const initialState: PostState = {
  post: [],
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

    builder.addCase(fetchPost.pending, (state, action) => {
      // state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      // state.isLoading = false;
      // state.data.post = action.payload;
      state.data.postLength = action.payload.length;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.error = true;
    });

    //fetchPostInPage

    builder.addCase(fetchPostInPage.pending, (state, action) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPostInPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.post = action.payload;
    });
    builder.addCase(fetchPostInPage.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default postSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetListPostResponse } from '../../types';

export interface PostState {
  value: number;
  posts: {
    data: IGetListPostResponse | undefined;
    loading: boolean;
  }
}

const initialState: PostState = {
  value: 1,
  posts: {
    data: undefined,
    loading: false,
  }
};


export const postSlice = createSlice({
  name: 'post',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchPostSuccess: (state, action: PayloadAction<IGetListPostResponse>) => {
      state.posts.loading = false;
      state.posts.data = action.payload;
      console.log("🚀 ~ file: postReducer.ts:29 ~ state.posts.data:", state.posts.data)
    },
    fetchPostFailure: (state) => {
      state.posts.loading = false;

    },
    fetchPostPending: (state) => {
      state.posts.loading = true;

    },
  },
});

export const { fetchPostSuccess, fetchPostFailure, fetchPostPending } = postSlice.actions;

export default postSlice.reducer;

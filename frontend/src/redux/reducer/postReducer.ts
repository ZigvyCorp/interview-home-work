import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetListPostResponse, IPost } from '../../types';
import { notification } from 'antd';

export interface PostState {
  value: number;
  posts: {
    data: IGetListPostResponse | undefined;
    loading: boolean;
  },
  post: {
    data: IPost | undefined;
    loading: boolean;
  }
}

const initialState: PostState = {
  value: 1,
  posts: {
    data: undefined,
    loading: false,
  },
  post: {
    data: undefined,
    loading: false
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
    },
    fetchPostFailure: (state, action: PayloadAction<[string]>) => {
      const [description] = action.payload;
      state.posts.loading = false;
      notification.error({
        message: "Ohhh",
        description
      });
    },
    fetchPostPending: (state,) => {
      state.posts.loading = true;
    },

    fetchPostDetailSuccess: (state, action: PayloadAction<IPost>) => {
      state.post.loading = false;
      state.post.data = action.payload;
    },
    fetchPostDetailFailure: (state, action: PayloadAction<[string]>) => {
      const [description] = action.payload;
      state.post.loading = false;
      notification.error({
        message: "Ohhh",
        description
      });

    },
    fetchPostDetailPending: (state) => {
      state.post.loading = true;
    },
  },
});

export const {
  fetchPostSuccess, fetchPostFailure, fetchPostPending,
  fetchPostDetailSuccess, fetchPostDetailFailure, fetchPostDetailPending,
} = postSlice.actions;

export default postSlice.reducer;

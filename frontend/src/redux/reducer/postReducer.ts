import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGetListPostResponse } from '../../types';
import { notification } from 'antd';

export interface PostState {
  value: number;
  posts: {
    data: IGetListPostResponse | undefined;
    loading: boolean;
  },
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
    },
    fetchPostFailure: (state, action: PayloadAction<[string]>) => {
      const [description] = action.payload;
      console.log("🚀 ~ file: postReducer.ts:33 ~ description:", description)
      state.posts.loading = false;
      notification.error({
        message: "Ohhh",
        description
      });

    },
    fetchPostPending: (state, ) => {
      state.posts.loading = true;
    },
  },
});

export const {
  fetchPostSuccess, fetchPostFailure, fetchPostPending,
} = postSlice.actions;

export default postSlice.reducer;

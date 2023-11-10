import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICommentModel, IPostModel } from '../../interfaces';

export interface IPaging {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface IAppState {
  loading: boolean;
  posts: Array<IPostModel>;
  paging: IPaging;
}

const initialState = {
  loading: false,
  posts: [] as IPostModel[],
  paging: {} as IPaging,
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearStore: (state) => {
      state = initialState;
    },
    setPosts: (
      state,
      action: PayloadAction<{
        data: any;
        paging: any;
      }>
    ) => {
      const { data, paging } = action.payload;

      state.posts = data;
      state.loading = false;
      state.paging = paging;
    },
    setCommentsByPostId: (
      state,
      action: PayloadAction<{
        postId: string;
        comments: Array<ICommentModel>;
      }>
    ) => {
      const { postId, comments } = action.payload;
      const newPosts = state.posts.map((post) => {
        if (post.id !== postId) return post;

        return {
          ...post,
          comments: {
            list: comments,
            count: comments.length,
          },
        };
      });

      state.posts = newPosts;
    },
  },
});

export const { setLoading, clearStore, setPosts, setCommentsByPostId } =
  appSlice.actions;

export default appSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  ListParams,
  ListResponse,
  PaginationParams,
} from '../../../../types/common';
import { Post } from '../../../../types/models/post';
import { RootState } from '../../store';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';

interface PostState {
  list: Post[];
  loading: boolean;
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: PostState = {
  list: [],
  loading: false,
  filter: {
    page: 1,
  },
  pagination: {
    page: 1,
    limit: 5,
    totalPages: 2,
    totalRows: 10,
  },
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //eslint-disable-next-line
    fetchPostList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchPostListSuccess(state, action: PayloadAction<ListResponse<Post>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchPostListFailed(state) {
      state.loading = false;
    },
    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export const selectPostList = (state: RootState) => state.posts.list;
export const selectPostLoading = (state: RootState) => state.posts.loading;
export const selectPostFilter = (state: RootState) => state.posts.filter;
export const selectPostPagination = (state: RootState) =>
  state.posts.pagination;

export default postSlice.reducer;

// const persistConfig = {
//   key: 'posts',
//   storage,
//   whitelist: ['list'],
// };

// const persistedPostReducer = persistReducer(persistConfig, postSlice.reducer);

// export default persistedPostReducer;

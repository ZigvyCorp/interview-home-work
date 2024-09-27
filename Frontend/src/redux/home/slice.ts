import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ITimeStamp, type IMeta } from '../../types/common';
import { type IUser } from '../../types/user';
import { type IComment } from '../../types/comment';

export interface IPostSlice {
  id: number;
  title: string;
  body: string;
  timestamp: ITimeStamp;
  user: IUser;
  comments: IComment[];
}

interface StateType {
  isLoading: boolean;
  isProcessing: boolean;
  data: IPostSlice[] | null;
  meta: IMeta | null;
  search: string;
  error: unknown;
}

const initialState: StateType = {
  isLoading: false,
  isProcessing: false,
  data: null,
  meta: null,
  search: '',
  error: undefined,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getPosts: (
      state,
      _action: PayloadAction<{
        page: number;
        take: number;
        search?: string;
      }>,
    ) => ({
      ...state,
      error: undefined,
      isLoading: true,
      data: state.data,
    }),
    getPostsSuccess: (state, { payload }) => ({
      ...state,
      data:
        state.data !== null ? [...state.data, ...payload.data] : payload.data,
      meta: payload.meta,
      search: payload.search,
      isLoading: false,
    }),
    getPostsFailed: (state, { payload }) => ({
      ...state,
      error: payload,
      data: [],
      isLoading: false,
    }),
    resetData: (state) => ({
      ...state,
      data: null,
      meta: null,
      isLoading: false,
    }),
  },
});

export const { actions: homeActions, reducer: homeReducer } = homeSlice;

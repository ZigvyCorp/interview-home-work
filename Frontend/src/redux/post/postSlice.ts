import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IPostSlice } from '../home/slice';

interface StateType {
  isLoading: boolean;
  isProcessing: boolean;
  data: IPostSlice[] | null;
  error: unknown;
}

const initialState: StateType = {
  isLoading: false,
  isProcessing: false,
  data: null,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPost: (
      state,
      _action: PayloadAction<{
        id: string;
      }>,
    ) => ({
      ...state,
      error: null,
      isLoading: true,
      data: state.data,
    }),
    getPostSuccess: (state, { payload }) => ({
      ...state,
      data: state.data != null ? [...state.data, payload] : [payload],
      isLoading: false,
    }),
    getPostFailed: (state, { payload }) => ({
      ...state,
      error: payload,
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

export const { actions: postActions, reducer: postReducer } = postSlice;

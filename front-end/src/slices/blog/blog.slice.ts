import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IBlog, IPaging, ResponseListPayload } from '../../interfaces';
import { DEFAULT_PAGING } from '../../constants';

export interface IBlogState {
  list: IBlog[];
  paging: IPaging;
  textSearch?: string;
  loading: boolean;

  detail: null | IBlog;
  detailLoading: boolean;
}

const initialState: IBlogState = {
  list: [],
  paging: DEFAULT_PAGING,
  textSearch: '',
  loading: false,

  detail: null,
  detailLoading: false,
};

export const blogSlice = createSlice({
  name: 'BLOG',
  initialState,
  reducers: {
    queryListAsync: (state) => {
      state.loading = true;
    },
    queryListAsyncSuccess: (
      state,
      action: PayloadAction<
        ResponseListPayload<IBlog> & { textSearch?: string }
      >
    ) => {
      state.loading = false;
      state.list = action.payload.list;
      state.textSearch = action.payload.textSearch;
      state.paging = action.payload.paging;
    },
    queryListAsyncFailed: (state) => {
      state.loading = false;
    },

    getDetailAsync: (state) => {
      state.detailLoading = true;
    },
    getDetailAsyncSuccess: (state, action: PayloadAction<IBlog>) => {
      state.detailLoading = false;
      state.detail = action.payload;
    },
    getDetailAsyncFailed: (state) => {
      state.detailLoading = false;
    },
  },
});

export const {
  queryListAsync,
  queryListAsyncSuccess,
  queryListAsyncFailed,
  getDetailAsync,
  getDetailAsyncSuccess,
  getDetailAsyncFailed,
} = blogSlice.actions;

export default blogSlice.reducer;

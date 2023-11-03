import { createSlice } from "@reduxjs/toolkit";
import { PostInitType } from "../types/postType";

const initialState: PostInitType = {
  postList: [],
  loading: false,
  currentRequestId: undefined,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.postList = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const postReducer = postSlice.reducer;
export const { fetchData, fetchDataSuccess, fetchDataFailure } = postSlice.actions;
export default postReducer;

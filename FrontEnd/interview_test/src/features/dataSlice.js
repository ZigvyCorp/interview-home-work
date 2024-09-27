import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  totalDocuments: null,
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.postsData;
      state.totalDocuments = action.payload.totalDocuments
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure  } = dataSlice.actions;

export default dataSlice.reducer;

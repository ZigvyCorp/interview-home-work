import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    totalData: [],
    loading: false,
    error: null,
    inputTitle: "",
    filterData: [],
  },
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      // tim action.payload co ton tai trong totaldata = id => lay cai khong ton tai.
      state.totalData = [...state.totalData, ...action.payload].reduce(
        (unique, obj) => {
          return unique.some((item) => item._id === obj._id)
            ? unique
            : [...unique, obj];
        },
        []
      );
      // console.log(action.payload);
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    fetchFilterPostsStart(state, action) {
      state.loading = true;
      state.error = null;
      state.inputTitle = action.payload.title;
    },
    fetchFilterPostsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      // tim action.payload co ton tai trong totaldata = id => lay cai khong ton tai.
      state.filterData = [...state.filterData, ...action.payload].reduce(
        (unique, obj) => {
          return unique.some((item) => item._id === obj._id)
            ? unique
            : [...unique, obj];
        },
        []
      );
      // console.log(action.payload);
    },
    fetchFilterPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFilterData(state, action) {
      (state.inputTitle = ""), (state.filterData = []);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchFilterPostsStart,
  fetchFilterPostsSuccess,
  fetchFilterPostsFailure,
  resetFilterData,
} = postsSlice.actions;

export default postsSlice.reducer;

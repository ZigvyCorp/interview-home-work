import { createSlice } from "@reduxjs/toolkit";
import { getPostsSuccess } from "./postsSlice";
import { getPostsFailure, getPostsRq } from "../actions/postAction";
import { RootState } from "../store";

interface BlackListState {
  loadingPosts: boolean;
}

const initialState: BlackListState = {
  loadingPosts: false,
};

const blacklist = createSlice({
  name: "blacklist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsRq.type, (state) => {
        state.loadingPosts = true;
      })
      .addCase(getPostsSuccess.type, (state) => {
        state.loadingPosts = false;
      })
      .addCase(getPostsFailure.type, (state) => {
        state.loadingPosts = false;
      });
  },
});

export const loadingPostsSelector = (state: RootState) =>
  state.blacklist.loadingPosts;
// eslint-disable-next-line no-empty-pattern
export const {} = blacklist.actions;
export default blacklist.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import postApi from "../../apis/postApi";

export const getPostAsync = createAction("post/getPostAsync");
export const getCommentsOfPostAsync = createAction(
  "post/getCommentsOfPostAsync"
);
export const searchPostAsync = createAction("post/searchPostAsync");

function* getPostSaga({ payload: page }) {
  try {
    yield put(loadingPosts());
    const data = yield call(postApi.getPosts, page);
    yield put(getPosts(data));
  } catch (error) {
    console.log(error);
  }
}
function* searchPostSaga({ payload: keyWord }) {
  try {
    yield put(loadingPosts());
    const data = yield call(postApi.searchPosts, keyWord);
    yield put(searchPosts(data));
  } catch (error) {
    console.log(error);
  }
}

function* getCommentsOfPostSaga({ payload: postId }) {
  try {
    const data = yield call(postApi.getCommentsOfPost, postId);
    yield put(getCommentsOfPost({ comments: data, postId }));
  } catch (error) {
    console.log(error);
  }
}

export function* postSaga() {
  yield all([
    takeLatest(getPostAsync, getPostSaga),
    takeLatest(searchPostAsync, searchPostSaga),
    takeEvery(getCommentsOfPostAsync, getCommentsOfPostSaga),
  ]);
}

const initialState = {
  posts: [],
  totalComment: {},
  isPostsLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadingPosts: (state, action) => {
      state.isPostsLoading = true;
    },
    getPosts: (state, action) => {
      state.isPostsLoading = false;
      state.posts = [...action.payload];
    },
    searchPosts: (state, action) => {
      state.isPostsLoading = false;
      state.posts = [...action.payload];
    },
    getCommentsOfPost: (state, action) => {
      const { postId, comments } = action.payload;
      state.totalComment[postId] = comments;
    },
  },
});

export const { getPosts, getCommentsOfPost, loadingPosts, searchPosts } =
  postSlice.actions;

export const selectPost = (state) => state.post;

export default postSlice.reducer;

import { call, fork, put, takeLatest } from "redux-saga/effects";

import {
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
} from "../slices/postSlice";
import { getPostsOnPage } from "../../api/api";

function* getPosts({ payload }) {
  try {
    const { page } = payload;
    const posts = yield call(getPostsOnPage, page);
    console.log(posts);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* watchGetPosts() {
  yield takeLatest(fetchPostsStart.type, getPosts);
}

export const postsSaga = [fork(watchGetPosts)];

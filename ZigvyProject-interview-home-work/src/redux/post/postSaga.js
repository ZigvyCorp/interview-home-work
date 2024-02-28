import { call, fork, put, takeLatest } from "redux-saga/effects";
// import { fetchPosts } from "../api";
import { getAllPostByPage, getAllPostByTitle } from "../../api/postsApi";

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchFilterPostsStart,
  fetchFilterPostsSuccess,
  fetchFilterPostsFailure,
} from "./postSlice";

function* getNextPosts({ payload }) {
  try {
    const { page, limit } = payload;
    // console.log({ page });
    const posts = yield call(getAllPostByPage, { page, limit });

    yield put(fetchPostsSuccess(posts.posts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}
function* getFilterPosts({ payload }) {
  try {
    const { title, page, limit } = payload;
    // console.log({ page });
    const posts = yield call(getAllPostByTitle, { title, page, limit });

    yield put(fetchFilterPostsSuccess(posts.posts));
  } catch (error) {
    yield put(fetchFilterPostsFailure(error));
  }
}

function* watchGetPosts() {
  yield takeLatest(fetchPostsStart.type, getNextPosts);
}
function* watchgetFilterPosts() {
  yield takeLatest(fetchFilterPostsStart.type, getFilterPosts);
}

export const postsSaga = [fork(watchGetPosts),fork(watchgetFilterPosts)];

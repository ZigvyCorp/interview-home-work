// sagas.js

import { put, takeLatest } from "redux-saga/effects";
import { fetchPostsSuccess, fetchPostsFailure } from "../redux/actions";
import Axios from "axios";
import { FETCH_POSTS_REQUEST, LOAD_MORE_POSTS_REQUEST } from "../redux/types";

function* fetchPosts(action) {
  try {
    const response = yield Axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${action.payload.page}`
    );
    const newPosts = response.data;
    yield put(fetchPostsSuccess(newPosts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* loadMorePosts(action) {
  try {
    const response = yield Axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${action.payload.page}`
    );
    const newPosts = response.data;
    yield put(fetchPostsSuccess(newPosts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeLatest(LOAD_MORE_POSTS_REQUEST, loadMorePosts); // Thêm saga mới
}

export default rootSaga;

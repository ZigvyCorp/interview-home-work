// sagas/postsSaga.js
import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/actionTypes";

function* fetchPostsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default watchFetchPosts;

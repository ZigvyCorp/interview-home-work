import { fork, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

function* getPostWatcherSaga() {
  yield takeLatest("API_CALL_REQUEST_POST", getPostWorkerSaga);
}

function* getPostsWatcherSaga() {
  yield takeLatest("API_CALL_REQUEST_POSTS", getPostsWorkerSaga);
}

function fetchPosts() {
  return axios({
    method: "GET",
    url: `${API_URL}/posts`,
  });
}

function fetchPost(id) {
  return axios({
    method: "GET",
    url: `${API_URL}/posts/${id}`,
  });
}

function* getPostsWorkerSaga() {
  try {
    const response = yield call(fetchPosts);
    const data = response.data;
    yield put({ type: "API_CALL_SUCCESS", data });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

function* getPostWorkerSaga(action) {
  try {
    const response = yield call(fetchPost, action.postId);
    const data = response.data;
    yield put({ type: "API_CALL_SUCCESS", data });
  } catch (error) {
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

const watcherFunc = [fork(getPostWatcherSaga), fork(getPostsWatcherSaga)];
export default watcherFunc;

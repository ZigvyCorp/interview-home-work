import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function* fetchPosts() {
  try {
    const posts = yield call(fetchData, "http://localhost:8000/api/posts");
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, error });
  }
}

function* fetchComments() {
  try {
    const comments = yield call(fetchData, "http://localhost:8000/api/comments");
    yield put({ type: FETCH_COMMENTS_SUCCESS, payload: comments });
  } catch (error) {
    yield put({ type: FETCH_COMMENTS_FAILURE, error });
  }
}

console.log(fetchComments);

function* fetchUsers() {
  try {
    const users = yield call(fetchData, "http://localhost:8000/api/users");
    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, error });
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments);
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default rootSaga;

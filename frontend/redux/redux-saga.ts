import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_POSTS_ERR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./action/post.action";
import { FETCH_COMMENTS_ERR, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./action/comment.action";
import { FETCH_USERS_ERR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./action/user.action";

const localhost = "http://localhost:8888";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function* fetchPosts() {
  try {
    const posts = yield call(fetchData, `${localhost}/posts`);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_ERR, error });
  }
}

function* fetchComments() {
  try {
    const comments = yield call(fetchData, `${localhost}/comments`);
    yield put({ type: FETCH_COMMENTS_SUCCESS, payload: comments });
  } catch (error) {
    yield put({ type: FETCH_COMMENTS_ERR, error });
  }
}

function* fetchUsers() {
  try {
    const comments = yield call(fetchData, `${localhost}/users`);
    yield put({ type: FETCH_USERS_SUCCESS, payload: comments });
  } catch (error) {
    yield put({ type: FETCH_USERS_ERR, error });
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments);
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default rootSaga;

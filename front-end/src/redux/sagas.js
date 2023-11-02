import { takeEvery, call, put } from "redux-saga/effects";
import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_SUCCESS,
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
} from "./actions";

export function* watcherSaga() {
  yield takeEvery(GET_ALL_POSTS, workerGetAllPosts);
  yield takeEvery(GET_POST_BY_ID, workerGetPostById);
}

function* workerGetAllPosts() {
  const posts = yield call(fetchAllPosts);
  yield put({ type: GET_ALL_POSTS_SUCCESS, posts });
}

function* workerGetPostById({ id }) {
  const post = yield call(fetchPostById, id);
  yield put({ type: GET_POST_BY_ID_SUCCESS, post });
}

function fetchAllPosts() {
  return fetch("https://jsonplaceholder.typicode.com/Posts").then((res) =>
    res.json()
  );
}

function fetchPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/Posts/${id}`).then((res) =>
    res.json()
  );
}

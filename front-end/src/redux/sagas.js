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

function* workerGetAllPosts({ title }) {
  const posts = yield call(fetchAllPosts, title);
  yield put({ type: GET_ALL_POSTS_SUCCESS, posts });
}

function* workerGetPostById({ id }) {
  const post = yield call(fetchPostById, id);
  yield put({ type: GET_POST_BY_ID_SUCCESS, post });
}

function fetchAllPosts(title) {
  return fetch(`${process.env.REACT_APP_BE_URL}/api/posts?title=${title}`).then(
    (res) => res.json().then((res) => res.data.posts)
  );
}

function fetchPostById(id) {
  return fetch(`${process.env.REACT_APP_BE_URL}/api/posts/${id}`).then((res) =>
    res.json().then((res) => res.data.post)
  );
}

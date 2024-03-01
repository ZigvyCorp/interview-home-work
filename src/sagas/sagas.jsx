import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_COMMENT_FETCH,
  GET_COMMENT_SUCCESS,
  GET_POST_FETCH,
  GET_POST_SUCCESS,
  GET_USER_FETCH,
  GET_USER_SUCCESS,
} from "../redux/types";

async function usersFetch() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}
async function postsFetch(page, limit) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  console.log("🚀 ~ postsFetch ~ res:", res);
  const totalCount = parseInt(res.headers["x-total-count"]);

  return { posts: res.data, totalCount };
}
async function commentsFetch() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  return res.data;
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USER_SUCCESS, users });
}
function* workGetPostsFetch(action) {
  console.log("🚀 ~ function*workGetPostsFetch ~ action:", action);
  const posts = yield call(postsFetch, action.page, action.limit);
  console.log("🚀 ~ function*workGetPostsFetch ~ posts:", posts);
  yield put({ type: GET_POST_SUCCESS, posts });
}
function* workGetCommentsFetch() {
  const comments = yield call(commentsFetch);
  yield put({ type: GET_COMMENT_SUCCESS, comments });
}

function* mySaga() {
  yield takeEvery(GET_USER_FETCH, workGetUsersFetch);
  yield takeEvery(GET_POST_FETCH, workGetPostsFetch);
  yield takeEvery(GET_COMMENT_FETCH, workGetCommentsFetch);
}

export default mySaga;

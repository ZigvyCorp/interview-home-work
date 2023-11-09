import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  GET_ALL_COMMENTS_REQUEST,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from "./actions";

const GetAllData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function* GetAllPosts() {
  try {
    const posts = yield call(GetAllData, "http://localhost:5000/posts");
    yield put({ type: GET_ALL_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: GET_ALL_POSTS_FAILURE, error });
  }
}

function* GetAllComments() {
  try {
    const comments = yield call(GetAllData, "http://localhost:5000/comments");
    yield put({ type: GET_ALL_COMMENTS_SUCCESS, payload: comments });
  } catch (error) {
    yield put({ type: GET_ALL_COMMENTS_FAILURE, error });
  }
}

function* GetAllUsers() {
  try {
    const users = yield call(GetAllData, "http://localhost:5000/users");
    yield put({ type: GET_ALL_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: GET_ALL_USERS_FAILURE, error });
  }
}

function* rootSaga() {
  yield takeLatest(GET_ALL_POSTS_REQUEST, GetAllPosts);
  yield takeLatest(GET_ALL_COMMENTS_REQUEST, GetAllComments);
  yield takeLatest(GET_ALL_USERS_REQUEST, GetAllUsers);
}

export default rootSaga;

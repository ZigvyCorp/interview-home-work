import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";
import { postsApi } from "../../api/listApi";
import {
  createPostSuccess,
  deletePostSuccess,
  getPostsSuccess,
  updatePostSuccess,
} from "../slices/postsSlice";
import {
  createPostFailure,
  deletePostFailure,
  getPostsFailure,
  updatePostFailure,
} from "../actions/postAction";

function* fetchPostSaga() {
  try {
    const { data } = yield call(postsApi.getAllPosts);
    yield put(getPostsSuccess(data));
  } catch (err) {
    yield put(getPostsFailure());
  }
}

function* fetchCreatePostSaga(action: PayloadAction<any>) {
  try {
    const { data } = yield call(postsApi.addPost, action.payload);
    yield put(createPostSuccess(data));
  } catch (err) {
    yield put(createPostFailure());
  }
}

function* fetchDeletePostSaga(action: PayloadAction<any>) {
  try {
    const { data } = yield call(postsApi.removeList, action.payload);
    yield put(deletePostSuccess(data._id));
  } catch (err) {
    yield put(deletePostFailure());
  }
}

function* fetchUpdatePostSaga(action: PayloadAction<any>) {
  try {
    const { data } = yield call(postsApi.updatePost, action.payload);
    yield put(updatePostSuccess(data));
  } catch (err) {
    yield put(updatePostFailure());
  }
}

function* postsSaga() {
  yield takeLatest("posts/getPostsRq", fetchPostSaga);
  yield takeLatest("posts/createPostRq", fetchCreatePostSaga);
  yield takeLatest("posts/updatePostRq", fetchDeletePostSaga);
  yield takeLatest("posts/deletePostRq", fetchUpdatePostSaga);
}

export default postsSaga;

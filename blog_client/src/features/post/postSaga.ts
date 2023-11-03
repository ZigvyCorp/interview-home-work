import { takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse } from "../../models/common";
import { Post } from "../../models/post";
import postApi from "../../api/postApi";
import { postActions } from "./postSlice";

function* fetchPostList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Post> = yield call(
      postApi.getAll,
      action.payload
    );
    yield put(postActions.fetchPostListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch post list", error);
    yield put(postActions.fetchPostListFailed());
  }
}

function* fetchPostById(action: PayloadAction<number>) {
  try {
    const response: Post = yield call(postApi.getById, action.payload);
    yield put(postActions.fetchPostByIdSuccess(response));
  } catch (error) {
    console.log(`Failed to fetch post by id ${action.payload}`, error);
    yield put(postActions.fetchPostByIdFailed());
  }
}

export default function* postSaga() {
  yield takeLatest(postActions.fetchPostList, fetchPostList);
  yield takeLatest(postActions.fetchPostById, fetchPostById);
}

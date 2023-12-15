import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  getPostDetailSuccess,
  paginatePostSuccess,
  createPostSuccess,
} from "../reducers/post";
import {
  CREATE_POST,
  IPostPaginationQuery,
  PAGINATE_POST,
  POST_DETAIL,
} from "../types/post";
import { IPaginationList } from "interfaces/common";
import { IPost, IPostWithRelations } from "interfaces/post";
import { createPost, getPostDetail, paginatePost } from "src/api/post";

function* paginatePostSaga(action: PayloadAction<IPostPaginationQuery>) {
  const data: IPaginationList<IPostWithRelations> = yield call(
    paginatePost,
    action.payload
  );
  yield put(paginatePostSuccess(data));
}

function* getPostDetailSaga(action: PayloadAction<number>) {
  const data: IPostWithRelations | null = yield call(
    getPostDetail,
    action.payload
  );
  yield put(getPostDetailSuccess(data));
}

function* createPostSaga(action: PayloadAction<Omit<IPost, "id">>) {
  yield call(createPost, action.payload);
  yield put(createPostSuccess());
}

export function* watchPaginatePostSaga() {
  yield takeLatest(PAGINATE_POST, paginatePostSaga);
}

export function* watchGetPostDetailSaga() {
  yield takeLatest(POST_DETAIL, getPostDetailSaga);
}

export function* watchCreatePostSaga() {
  yield takeLatest(CREATE_POST, createPostSaga);
}

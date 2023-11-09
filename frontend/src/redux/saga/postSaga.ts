import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { isEmpty } from 'lodash';
import { 
  IGetListPost, IGetListPostResponse,
  IGetListComment, IGetListCommentResponse,
 } from "../../types";

import { fetchPostsApi } from "../../apis/post";
import { fetchCommentsApi } from "../../apis/comment";
import {
  fetchPostSuccess, fetchPostFailure, fetchPostPending,
} from "../reducer/postReducer";
import {
  fetchCommentSuccess, fetchCommentFailure, fetchCommentPending,
} from "../reducer/commentReducer";
import { IResponseApi } from "../../utils";

export const fetchPostAsync = createAction<IGetListPost>('post/fetch');
function* fetchPostSaga(action: PayloadAction<IGetListPost>) {
  try {
    yield put(fetchPostPending())

    const { payload } = action;
    const res: IResponseApi<IGetListPostResponse> = yield call(fetchPostsApi, payload);
    const { data, error } = res;
    if (!isEmpty(error)) {
      throw new Error(error?.message || "Unknown");
    }

    yield put(fetchPostSuccess(data!))

  } catch (error: any) {
    yield put(fetchPostFailure(error?.message))
  }
}


export const fetchCommentAsync = createAction<IGetListComment>('post/comment/id');
function* fetchCommentSaga(action: PayloadAction<IGetListComment>) {
  try {
    const { payload } = action;
    const { postId } = payload;
    yield put(fetchCommentPending([postId]))

    const res: IResponseApi<IGetListCommentResponse> = yield call(fetchCommentsApi, payload);
    const { data, error } = res;
    if (!isEmpty(error)) {
      throw new Error(error?.message || "Unknown");
    }

    yield put(fetchCommentSuccess([payload.postId, data!]))

  } catch (error: any) {
    yield put(fetchCommentFailure(error?.message))
  }
}

export function* postSaga() {
  yield all([
    takeLatest(fetchPostAsync, fetchPostSaga),
    takeLatest(fetchCommentAsync, fetchCommentSaga),

  ]);
}
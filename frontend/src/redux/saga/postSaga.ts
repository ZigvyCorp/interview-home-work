import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { isEmpty } from 'lodash';
import {
  IGetListPost, IGetListPostResponse,
  IGetListComment, IGetListCommentResponse, IPost, IGetPost,
} from "../../types";

import { fetchPostDetailApi, fetchPostsApi } from "../../apis/post";
import { fetchCommentsApi } from "../../apis/comment";
import {
  fetchPostSuccess, fetchPostFailure, fetchPostPending,
  fetchPostDetailSuccess, fetchPostDetailFailure, fetchPostDetailPending,
} from "../reducer/postReducer";
import {
  fetchCommentSuccess, fetchCommentFailure, fetchCommentPending,
} from "../reducer/commentReducer";
import { IResponseApi } from "../../utils";

export const fetchPostAsync = createAction<IGetListPost>('post/fetch');
function* fetchPostSaga(action: PayloadAction<IGetListPost>) {
  try {
    yield put(fetchPostPending());
    yield delay(500);
    const { payload } = action;
    const res: IResponseApi<IGetListPostResponse> = yield call(fetchPostsApi, payload);
    const { data, error } = res;
    if (!isEmpty(error)) {
      throw new Error(error?.message || "Unknown");
    }

    yield put(fetchPostSuccess(data!));

  } catch (error: any) {
    yield put(fetchPostFailure([error?.message]));
  }
}

export const fetchPostDetailAsync = createAction<IGetPost>('post/fetch/id');
function* fetchPostDetailSaga(action: PayloadAction<IGetPost>) {
  try {
    yield put(fetchPostDetailPending());
    const { payload } = action;
    const res: IResponseApi<IPost> = yield call(fetchPostDetailApi, payload);
    const { data, error } = res;
    if (!isEmpty(error)) {
      throw new Error(error?.message || "Unknown");
    }

    yield put(fetchPostDetailSuccess(data!));

  } catch (error: any) {
    yield put(fetchPostDetailFailure([error?.message]));
  }
}


export const fetchCommentAsync = createAction<IGetListComment>('post/comment/id');
function* fetchCommentSaga(action: PayloadAction<IGetListComment>) {
  const { payload } = action;
  const { postId } = payload;
  try {

    yield put(fetchCommentPending([postId]));

    yield delay(500);
    const res: IResponseApi<IGetListCommentResponse> = yield call(fetchCommentsApi, payload);
    const { data, error } = res;
    if (!isEmpty(error)) {
      throw new Error(error?.message || "Unknown");
    }
    yield put(fetchCommentSuccess([payload.postId, data!]));

  } catch (error: any) {
    yield put(fetchCommentFailure([postId, error?.message]));
  }
}

export function* postSaga() {
  yield all([
    takeLatest(fetchPostAsync, fetchPostSaga),
    takeLatest(fetchPostDetailAsync, fetchPostDetailSaga),
    takeLatest(fetchCommentAsync, fetchCommentSaga),

  ]);
}
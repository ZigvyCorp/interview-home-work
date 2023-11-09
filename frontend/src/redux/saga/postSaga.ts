import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { isEmpty } from 'lodash';
import { IGetListPost, IGetListPostResponse } from "../../types";

import { fetchPostsApi } from "../../apis/post";
import {
  fetchPostSuccess, fetchPostFailure, fetchPostPending
} from "../reducer/postReducer";
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

export function* postSaga() {
  yield all([
    takeLatest(fetchPostAsync, fetchPostSaga)
  ]);
}
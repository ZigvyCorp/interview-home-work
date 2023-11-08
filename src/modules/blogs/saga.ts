// import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { BLOGS_SERVICES } from "./service";
import { blogAction } from "./slice";

export function* getPosts() {
  try {
    const response: AxiosResponse<any> = yield call(BLOGS_SERVICES.getPosts);
    if (response.data) {
      // console.log(response.data);

      yield put(blogAction.getPostsSuccess(response.data));
    }
  } catch (error: any) {
    yield put(blogAction.getPostsFail(error));
  }
}

export default function* blogSaga() {
  yield takeLatest(blogAction.getPosts.type, getPosts);
}

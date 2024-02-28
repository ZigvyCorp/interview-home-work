import { fork, put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
  getMorePostsFailed,
  getMorePostsSuccess,
  getPostsFailed,
  getPostsSuccess,
  gettingMorePosts,
  gettingPosts,
} from "../reducer/postReducer";
import { PostParams } from "../../models/PostModel";
import postApi from "../../api/postApi";

function* onGetMorePosts(action: PayloadAction<PostParams>) {
  try {
    const response: AxiosResponse = yield call(
      postApi.getPosts,
      action.payload
    );
    yield put(
      getMorePostsSuccess({
        posts: response?.data?.posts,
        pagination: response?.data?.pagination,
      })
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.status === 403) return;
    yield put(getMorePostsFailed(error.response.data.message));
  }
}

function* onGetPosts(action: PayloadAction<PostParams>) {
  try {
    const response: AxiosResponse = yield call(
      postApi.getPosts,
      action.payload
    );
    yield put(
      getPostsSuccess({
        posts: response?.data?.posts,
        pagination: response?.data?.pagination,
      })
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.status === 403) return;
    yield put(getPostsFailed(error.response.data.message));
  }
}

function* watchGetMorePostsFlow() {
  yield takeEvery(gettingMorePosts.type, onGetMorePosts);
}

function* watchGetPostsFlow() {
  yield takeEvery(gettingPosts.type, onGetPosts);
}

export function* postSaga() {
  yield fork(watchGetPostsFlow);
  yield fork(watchGetMorePostsFlow);
}

import { call, takeEvery, put } from "redux-saga/effects";
import { fetchPostSuccess } from "./reducers/postState";
import { fetchCommentSuccess } from "./reducers/commentState";

import { postService } from "../service/postService";

export function* workFetchPostData(action : any) : any {
    const posts : any = yield call(postService.getPostData, action.payload);
    yield put(fetchPostSuccess(posts));
}

export function* workFetchCommentData(action : any) : any {
    const comments : any = yield call(postService.getCommentByPostId, action.payload);
    yield put(fetchCommentSuccess(comments));
}

export function* postSaga() {
  yield takeEvery('post/fetchPostData', workFetchPostData);
}

export function* commentSaga() {
    yield takeEvery('comment/fetchCommentData', workFetchCommentData);
  }
  

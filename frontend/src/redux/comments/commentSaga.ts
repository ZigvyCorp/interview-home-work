import axios from 'axios';
import { call, fork, put } from 'redux-saga/effects';
import { commentActions } from './slice';

export function* getTypiCodeComment() {
  yield put(commentActions.getCommentStart());
  try {
    const comments: { data: any } = yield call(axios.get, "https://jsonplaceholder.typicode.com/comments");
    yield put(commentActions.getCommentSuccess(comments.data));
  } catch (e) {
    yield put(commentActions.getCommentFailed());
  }
}


export function* postSaga() {
  // yield fork(getPosts);
  yield fork(getTypiCodeComment);
}


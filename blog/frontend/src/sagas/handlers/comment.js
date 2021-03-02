import { call, put } from 'redux-saga/effects';
import {
  getCommentsFailed,
  setComments,
  setCommentsByPostId,
  getCommentsByPostIdFailed,
} from '../../actions/commentActions';
import {
  requestGetComments,
  requestGetCommentsByPostId,
} from '../requests/comment';

export function* handleGetComments(action) {
  try {
    const response = yield call(requestGetComments);
    const { data } = response;

    yield put(setComments(data));
  } catch (error) {
    yield put(getCommentsFailed(error));
  }
}

export function* handleGetCommentsByPostId(action) {
  try {
    const response = yield call(
      requestGetCommentsByPostId,
      action.payload.postId
    );
    const { data } = response;

    yield put(setCommentsByPostId(data));
  } catch (error) {
    yield put(getCommentsByPostIdFailed(error));
  }
}

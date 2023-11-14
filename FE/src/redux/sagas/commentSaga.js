import { call, put, takeEvery } from 'redux-saga/effects';

import { getListComments } from '../apis/commentApi';
import { fetchCommentsSuccess } from '../Reducers/commentSlice';

function* fetchCommentsSaga() {
  try {
    const res = yield call(getListComments);
    yield put(fetchCommentsSuccess(res.data));
  } catch (e) {
    console.error(e);
  }
}
export function* watchFetchComments() {
  yield takeEvery('comment/fetchComment', fetchCommentsSaga);
}

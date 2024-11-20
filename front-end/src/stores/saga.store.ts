import { all, fork } from 'redux-saga/effects';
import { blogSaga } from '../saga';

export function* watcherSaga() {
  yield all([fork(blogSaga)]);
}

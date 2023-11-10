import { all, fork } from 'redux-saga/effects';
import { appSaga } from './saga';

export function* watcherSaga() {
  yield all([fork(appSaga)]);
}

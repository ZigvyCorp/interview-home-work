import {all} from 'redux-saga/effects';
import {postSaga} from './posts.saga';

export function* rootSaga() {
  yield all([postSaga()]);
}

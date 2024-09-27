import { all, fork, type AllEffect, type ForkEffect } from 'redux-saga/effects';
import homeSagas from './home/saga';
import postSagas from './post/postSaga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(homeSagas), fork(postSagas)]);
}

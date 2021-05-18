import {all} from 'redux-saga/effects';
import postsSaga from './posts';
import usersSaga from './user';
import cmtsSaga from './cmt';

export default function* rootSaga() {
  yield all([
    postsSaga(), usersSaga(), cmtsSaga()
  ])
}
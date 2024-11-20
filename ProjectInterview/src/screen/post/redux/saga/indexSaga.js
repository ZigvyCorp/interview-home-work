import { all } from 'redux-saga/effects';
import { commentDetailSagas, commentSagas } from './commentSaga';
import { postSagas, postSagasDetail } from './postSaga';
import userSagas from './userSaga';
export default function* rootSaga() {
  yield all([...postSagas, ...userSagas, ...commentSagas, ...postSagasDetail, ...commentDetailSagas]);
}
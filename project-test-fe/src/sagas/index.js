import { all } from 'redux-saga/effects';
import {postSagas , postSagasDetail} from './posts';
import userSagas from './users';
import {commentSagas, commentDetailSagas} from './comments';

export default function* rootSaga() {
  yield all([...postSagas, ...userSagas, ...commentSagas, ...postSagasDetail, ...commentDetailSagas]);
}

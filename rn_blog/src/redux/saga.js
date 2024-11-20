import { all,fork,spawn } from 'redux-saga/effects';
import postSaga from './modules/Post/saga';
import userSaga from './modules/User/saga';
import commentSaga from './modules/Comment/saga';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
        fork(commentSaga)
    ]);
}
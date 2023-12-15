import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import postListSaga from './postListSaga';
import postSaga from './postSaga';

function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),
        fork(postListSaga)
    ]);
}

export default rootSaga;
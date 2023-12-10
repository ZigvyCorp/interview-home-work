import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import postSaga from './postSaga';
import commentSaga from './commentSaga';


function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),
        fork(commentSaga)
    ]);
}

export default rootSaga;
import { all, fork } from 'redux-saga/effects';

import authSaga from "./auth/saga";
import postSaga from './post/saga';
import commentSaga from './comment/saga';

function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(postSaga),
        fork(commentSaga)
    ]);
}

export default rootSaga;
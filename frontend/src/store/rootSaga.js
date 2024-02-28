import { all } from 'redux-saga/effects';

import postSaga from './post/postSaga';
import userSaga from './user/userSaga';
import commentSaga from './comment/commentSaga';

function* rootSaga() {
    yield all([postSaga(), userSaga(), commentSaga()]);
}

export default rootSaga;
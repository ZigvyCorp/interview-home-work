import { all, call } from 'redux-saga/effects';

import { postSagas } from './post/post.sagas';
import { commentSagas } from './comment/comment.sagas';

export default function* rootSaga() {
    yield all([call(postSagas), call(commentSagas)]);
}

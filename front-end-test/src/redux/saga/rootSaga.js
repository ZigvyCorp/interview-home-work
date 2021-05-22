import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_AUTHOR, GET_COMMENTS, GET_POSTS } from '../store/actions/actionTypes'
import { handlerGetAuthor, handlerGetComments, handlerGetPosts } from './handlers/posts'

function* watchPostSaga() {
    yield takeLatest(GET_POSTS, handlerGetPosts)
}

function* watchCommentSaga() {
    yield takeEvery(GET_COMMENTS, handlerGetComments)
}

function* watchAuthorSaga() {
    yield takeEvery(GET_AUTHOR, handlerGetAuthor)
}


export function* watcherSaga() {
    yield all([
        fork(watchPostSaga),
        fork(watchCommentSaga),
        fork(watchAuthorSaga)
    ])
}
import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from 'apis'

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts)
        //Trigger an action when success
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (err) {
        console.log(err)
        yield put(actions.getPosts.getPostsError(err))
    }
}

function* fetchUserSaga(action) {
    try {
        const users = yield call(api.fetchUsers)
        //Trigger an action when success
        yield put(actions.getUsers.getUsersSuccess(users.data))
    } catch (err) {
        console.log(err)
        yield put(actions.getUsers.getUsersError(err))
    }
}

function* fetchCommentsSaga(action) {
    try {
        const comments = yield call(api.fetchCommentsPost, action.payload)
        //Trigger an action when success
        yield put(actions.getComments.getCommentsSuccess(comments.data))
    } catch (err) {
        console.log(err)
        yield put(actions.getComments.getCommentsError(err))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
    yield takeLatest(actions.getUsers.getUsersRequest, fetchUserSaga)
    yield takeLatest(actions.getComments.getCommentsRequest, fetchCommentsSaga)
}

//Generater function ES6

export default mySaga

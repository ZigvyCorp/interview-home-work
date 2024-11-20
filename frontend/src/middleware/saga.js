import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchPost(action) {

    try {
        const posts = yield call(() => fetch('/api/posts').then(res => res.json()))
        yield put({type: 'post/get_post', payload: posts})
    } catch (error) {
        console.log(error)
    }
}

function* fetchUser(action) {
    try {
        const user = yield call(() => fetch('/api/users/'.concat(action.payload)).then(res => res.json()))
        yield put({type: 'user/get_author', payload: user})
    } catch (error) {
        console.log(error)
    }
}

function* fetchCommentOfPost(action) {
    try {
        const comments = yield call(() => fetch('/api/posts/'.concat(action.payload).concat('/comments')).then(res => res.json()))
        yield put({ type: 'comment/get_comment', payload: comments })
    } catch (error) {
        console.log(error)
    }
}

function* saga() {
    yield takeEvery('request_post', fetchPost)
    yield takeEvery('request_user', fetchUser)
    yield takeEvery('request_comment', fetchCommentOfPost)
}

export default saga
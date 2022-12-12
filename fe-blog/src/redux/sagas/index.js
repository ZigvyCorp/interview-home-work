import {takeLatest, put} from 'redux-saga/effects';
import {getPostsSuccess, getPostsRequest, getPostsFailed} from "../postsSlice";
import api from "../../api";

function* fetchPostSaga(action) {
    try {
        const posts = yield api.posts.all()
        yield put(getPostsSuccess(posts))

    } catch (e) {
        yield put(getPostsFailed)
    }
}

function* rootSaga() {
    yield takeLatest(getPostsRequest, fetchPostSaga)
}

export default rootSaga;
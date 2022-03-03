import { fork, call, put, takeLatest,takeEvery} from "redux-saga/effects";
import postApi from '../api/PostApi';
import {getPostsSuccess,
    getPostByIdSuccess,
    getCommentOfPostSuccess} from '../actions/postActions';
import {GET_COMMENT_OF_POST,
    GET_POST_BY_ID,
    GET_ALL_POSTS} from '../actions/actionCreator';

function *getAllPost(action) {
    try {
        const response = yield call(postApi.getAllPost, action.payload);
        yield put(getPostsSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function* watchGetPosts() {
    yield takeLatest(
        GET_ALL_POSTS,
        getAllPost
    )
}

function *getPostById(action) {
    try {
        const response = yield call(postApi.getPostById, action.payload);
        yield put(getPostByIdSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function* watchGetPostById() {
    yield takeLatest(
        GET_POST_BY_ID,
        getPostById
    )
}

function *getCommentOfPost(action) {
    try {
        const response = yield call(postApi.getCommentOfPost, action.payload);
        yield put(getCommentOfPostSuccess(response))

    } catch (error){
        console.log("ERROR", error)
    }
}

function* watchCommentOfPost() {
    yield takeLatest(
        GET_COMMENT_OF_POST,
        getCommentOfPost
    )
}

const postSaga = [
    fork(watchGetPosts),
    fork(watchGetPostById),
    fork(watchCommentOfPost),
];
export default postSaga;
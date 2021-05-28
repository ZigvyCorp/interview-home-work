
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects'
import * as Types from '../action/actionType';
import {requestFetchPosts, requestFetchUsers, requestFetchComments,
        requestFetchPostDetail, requestFetchCommentPostDetail} from '../../services/api'

import {fetchPostsSuccess, fetchPostsError, fetchUsersSuccess, fetchUsersError,
        fetchCommentsSuccess, fetchCommentsError, fetchPostDetailSuccess, fetchPostDetailError} from '../action/index'

export function* actionFetchPosts() {
    yield take(Types.FETCH_POSTS);
    const response = yield call(requestFetchPosts);
    const {data, status} = response;
    if(status === 200){
        yield put(fetchPostsSuccess(data));
    } else {
        yield put(fetchPostsError());
    }
}

export function* actionFetchUser() {
    yield take(Types.FETCH_USERS);
    const response = yield call(requestFetchUsers);
    const {data, status} = response;
    //console.log(data)
    if(status === 200){
        yield put(fetchUsersSuccess(data));
    } else {
        yield put(fetchUsersError());
    }
}

export function* actionFetchComment(){
    yield take(Types.FETCH_COMMENTS);
    const response = yield call(requestFetchComments);
    const {data, status} = response;
    //console.log(data)
    if(status === 200){
        yield put(fetchCommentsSuccess(data));
    } else {
        yield put(fetchCommentsError());
    }
}

export function* actionFetchPostDetail(action){
    if(action.idPost)
    {
        const responsePostDetail = yield call(requestFetchPostDetail, action.idPost);
        const responseCommentPostDetail = yield call(requestFetchCommentPostDetail, action.idPost);
        if(responsePostDetail.status === 200 && responseCommentPostDetail.status === 200 && responsePostDetail.data.length > 0){
            //console.log(responsePostDetail.data, responseCommentPostDetail.data)
            yield put(fetchPostDetailSuccess(responsePostDetail.data, responseCommentPostDetail.data));
        } else {
            yield put(fetchPostDetailError());
        }
    }
    else {
        yield put(fetchPostDetailError());
    }
    
}


export default function* rootSaga() {
    yield all([
        fork(actionFetchUser),
        fork(actionFetchComment),
        fork(actionFetchPosts),
        takeEvery(Types.FETCH_POST_DETAIL, actionFetchPostDetail)
    ])
 }
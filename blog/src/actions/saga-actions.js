import * as apis from './api-client';
import { call, put } from 'redux-saga/effects';
import actionTypes from './actionTypes'

export function* fetchPosts(action) {
    try {
        const req = yield call(apis.getPosts, action.payload);
        yield put({ type: actionTypes.GET_POSTS_SUCCESS, payload: req.data });
    } catch (error) {
        yield put({ type: actionTypes.GET_POSTS_FAILED });
    }
}

export function* fetchPost(action) {
    try {
        const req = yield call(apis.getPost, action.payload.id);
        yield put({ type: actionTypes.GET_POST_SUCCESS, payload: req.data });
    } catch (error) {
        yield put({ type: actionTypes.GET_POST_FAILED });
    }
}
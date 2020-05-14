import { Meteor } from 'meteor/meteor';
import { put, takeLatest, all } from 'redux-saga/effects';
import posts from '../apis/posts';
import { 
    fetchAllPostsSuccess,
    fetchAllPostsFailure, 
    createPostFailure
} from '../actions/index';
import {
    FETCH_ALL_POSTS,
    CREATE_POST
} from '../actions/types';

export function* fetchAllPosts() {
    try {
        const response = yield fetch(`http://localhost:3009/posts`).then(res => res.json());
        yield put(fetchAllPostsSuccess(response));
    } catch (error) {
        yield put(fetchAllPostsFailure(error));
    }
}

export function* createPost(action) {
    try {
        const owner = Meteor.userId();
        const created_at = new Date();
        const response = yield posts.post('/posts', { ...action.payload, owner, created_at});
    } catch (error) {
        yield put(createPostFailure(error));
    }
}

export const postSagas = [
    takeLatest(FETCH_ALL_POSTS, fetchAllPosts),
    takeLatest(CREATE_POST, createPost)
]
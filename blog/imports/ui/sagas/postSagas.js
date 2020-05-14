import { Meteor } from 'meteor/meteor';
import { put, takeLatest, all } from 'redux-saga/effects';
import posts from '../apis/posts';
import { 
    fetchAllPostsSuccess,
    fetchAllPostsFailure, 
    createPostFailure,
    fetchPostSuccess,
    fetchPostFailure
} from '../actions/index';
import {
    FETCH_ALL_POSTS,
    CREATE_POST,
    FETCH_POST
} from '../actions/types';

const url = 'http://localhost:3009/posts';

export function* fetchAllPosts() {
    try {
        const response = yield fetch(url).then(res => res.json());
        yield put(fetchAllPostsSuccess(response));
    } catch (error) {
        yield put(fetchAllPostsFailure(error));
    }
}

export function* createPost(action) {
    try {
        const owner = Meteor.userId();
        const created_at = new Date();
        yield posts.post('/posts', { ...action.payload, owner, created_at});
    } catch (error) {
        yield put(createPostFailure(error));
    }
}

export function* fetchPost(action) {
  try{
    const response = yield fetch(`${url}/${action.payload}`).then(res => res.json());
    yield put(fetchPostSuccess(response));
  } catch (error) {
    yield put(fetchPostFailure(error));
  }
}

export const postSagas = [
    takeLatest(FETCH_ALL_POSTS, fetchAllPosts),
    takeLatest(CREATE_POST, createPost),
    takeLatest(FETCH_POST, fetchPost)
]
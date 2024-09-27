/**
 * @file postSaga.js
 * @description Redux Saga file for handling asynchronous actions related to posts.
 * This file contains sagas for fetching multiple posts and a single post, as well as
 * watchers for these actions.
 * 
 * @module postSaga
 */

 /**
  * Saga to fetch multiple posts.
  * Makes an API call to fetch posts and dispatches success or failure actions.
  * 
  * @generator
  * @function fetchPosts
  */

 /**
  * Saga to fetch a single post.
  * Makes an API call to fetch a post by ID and dispatches success or failure actions.
  * 
  * @generator
  * @function fetchPost
  * @param {Object} action - The action object containing the post ID.
  */

 /**
  * Watcher saga for fetching multiple posts.
  * Watches for FETCH_POSTS action and triggers fetchPosts saga.
  * 
  * @generator
  * @function watchFetchPosts
  */

 /**
  * Watcher saga for fetching a single post.
  * Watches for FETCH_POST action and triggers fetchPost saga.
  * 
  * @generator
  * @function watchFetchPost
  */

 /**
  * Root saga that combines all the watcher sagas.
  * 
  * @generator
  * @function rootSaga
  */
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_POST, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POST_FAILURE } from '../actions/postActions';

function* fetchPosts() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    yield put({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, error });
  }
}

function* fetchPost(action) {
  try {
    const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    const data = yield response.json();
    yield put({ type: FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_POST_FAILURE, error });
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}

function* watchFetchPost() {
  yield takeEvery(FETCH_POST, fetchPost);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchPost(),
  ]);
}
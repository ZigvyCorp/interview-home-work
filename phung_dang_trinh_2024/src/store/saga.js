import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { API} from '../store/api'
import {
    GET_POSTS_REQUEST, getPostsSuccess, getPostsFailure,
    GET_COMMENTS_REQUEST, getCommentsSuccess, getCommentsFailure,
    GET_USERS_REQUEST, getUsersSuccess, getUsersFailure,
    GET_POST_DETAILS_REQUEST, getPostDetailsSuccess, getPostDetailsFailure
} from './actions';

// Fetch Posts
const fetchPostsAPI = async () => {
    const response = await fetch(API.POSTS);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
};

function* fetchPosts() {
    try {
        const posts = yield call(fetchPostsAPI);
        yield put(getPostsSuccess(posts));
    } catch (error) {
        yield put(getPostsFailure(error.message));
    }
}

// Fetch Comments
const fetchCommentsAPI = async () => {
    const response = await fetch(API.COMMENTS);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return await response.json();
};

function* fetchComments() {
    try {
        const comments = yield call(fetchCommentsAPI);
        yield put(getCommentsSuccess(comments));
    } catch (error) {
        yield put(getCommentsFailure(error.message));
    }
}

// Fetch Users
const fetchUsersAPI = async () => {
    const response = await fetch(API.USERS);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
};

function* fetchUsers() {
    try {
        const users = yield call(fetchUsersAPI);
        yield put(getUsersSuccess(users));
    } catch (error) {
        yield put(getUsersFailure(error.message));
    }
}

// Fetch Post Details
const fetchPostDetailsAPI = async (postId) => {
    const response = await fetch(`${API.POSTS}/${postId}`);
    if (!response.ok) throw new Error('Failed to fetch post details');
    return await response.json();
};

function* fetchPostDetails(action) {
    try {
        const postDetails = yield call(fetchPostDetailsAPI, action.postId);
        yield put(getPostDetailsSuccess(postDetails));
    } catch (error) {
        yield put(getPostDetailsFailure(error.message));
    }
}

// Watchers
function* watchFetchPosts() {
    yield takeEvery(GET_POSTS_REQUEST, fetchPosts);
}

function* watchFetchComments() {
    yield takeEvery(GET_COMMENTS_REQUEST, fetchComments);
}

function* watchFetchUsers() {
    yield takeEvery(GET_USERS_REQUEST, fetchUsers);
}

function* watchFetchPostDetails() {
    yield takeEvery(GET_POST_DETAILS_REQUEST, fetchPostDetails);
}

// Root saga
export default function* rootSaga() {
  yield all([
      fork(watchFetchPosts),  // Sử dụng fork
      fork(watchFetchComments), // Sử dụng fork
      fork(watchFetchUsers),    // Sử dụng fork
      fork(watchFetchPostDetails), // Sử dụng fork
  ]);
}

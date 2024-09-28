import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Gọi API
function fetchPostsApi() {
  return axios.get('http://localhost:5000/api/posts'); 
}

// Saga worker
function* fetchPosts() {
  try {
    const response = yield call(fetchPostsApi);
    console.log(response.data);
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: error });
  }
}

function createPostApi(postData) {
  return axios.post('http://localhost:5000/api/posts', postData, {
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }); 
}

function* createPost(action) {
  try {
    const response = yield call(createPostApi, action.payload);
  } catch (error) {
    yield put({ type: 'CREATE_POST_FAILURE', payload: error.message });
  }
}

// Saga watcher
function* postsSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPosts);
  yield takeEvery('CREATE_POST_REQUEST', createPost);
}

export default postsSaga;

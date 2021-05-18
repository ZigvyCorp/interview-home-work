import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

const getPostsData = async() => { 
  return await axios({
    method: "get",
    url: urlPosts
  }).then(result => result.data);
}

function* axiosPost() {
  try {
    const posts = yield call(getPostsData);
    yield put({type: 'GET_POSTS_SUCCESS', payload: posts});
  } catch (e) {
    yield put({type: 'GET_POSTS_FAILED', message: e.message});
  }
}

function* postsSaga() {
  yield takeEvery('GET_POSTS_REQUEST', axiosPost);
}

export default postsSaga;
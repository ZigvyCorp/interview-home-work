import { takeLatest, put, call, select } from 'redux-saga/effects';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  FILTER_POSTS,
  FILTER_POSTS_SUCCESS,
  FILTER_POSTS_FAIL,
} from '../action/postAction';

const getPosts = state => state.posts;

const fetchPosts = payload => {
  let url = `https://jsonplaceholder.typicode.com/posts`;
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      throw err;
    });
};

function* sagaWatcher() {
  yield takeLatest(FETCH_POSTS, fetchPostWorker);
  yield takeLatest(FILTER_POSTS, filterPostWorker);
}

function* fetchPostWorker({ payload }) {
  try {
    const data = yield call(fetchPosts, payload);
    yield put({
      type: FETCH_POSTS_SUCCESS,
      data,
    });
  } catch (err) {
    yield put({
      type: FETCH_POSTS_FAIL,
    });
  }
}

function* filterPostWorker({ payload }) {
  try {
    const postState = yield select(getPosts);
    const regex = new RegExp(payload.query, 'i');
    const tempData = postState.data.filter(({ title }) => title.match(regex));
    yield put({
      type: FILTER_POSTS_SUCCESS,
      tempData,
    });
  } catch (err) {
    yield put({
      type: FILTER_POSTS_FAIL,
    });
  }
}

export default sagaWatcher;

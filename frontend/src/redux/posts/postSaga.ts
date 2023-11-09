import axios from 'axios';
import { call, put, takeEvery} from 'redux-saga/effects';
import { postActions } from './slice';
import { APIPaths } from '../../utils';
import { fetchPosts as fetchPostsAction } from './action';

export function* fetchPosts() {
  yield put(postActions.getAllPostStart());
  try {
    const posts: { data: any } = yield call(axios.get, APIPaths.Post);
    yield put(postActions.getAllPostSuccess(posts.data));
  } catch (e) {
    yield put(postActions.getAllPostFailed());
  }
}

export function* postSaga() {
    yield takeEvery(fetchPostsAction().type, fetchPosts);
  }

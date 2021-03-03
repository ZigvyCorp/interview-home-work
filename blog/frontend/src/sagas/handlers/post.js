import { call, put } from 'redux-saga/effects';
import { setPosts, getPostsFailed } from '../../actions/postActions';
import { requestGetPosts } from '../requests/post';

export function* handleGetPosts(action) {
  try {
    const params = [action.payload.keyword, action.payload.pageNumber];

    const response = yield call(requestGetPosts, ...params);
    const { data } = response;

    yield put(setPosts(data));
  } catch (error) {
    yield put(getPostsFailed(error));
  }
}

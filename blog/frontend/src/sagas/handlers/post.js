import { call, put } from 'redux-saga/effects';
import { setPosts } from '../../actions/postActions';
import { requestGetPosts } from '../requests/post';

export function* handleGetPosts(action) {
  try {
    const response = yield call(requestGetPosts, action.payload.keyword);
    const { data } = response;

    yield put(setPosts(data));
  } catch (error) {
    console.log(error);
  }
}

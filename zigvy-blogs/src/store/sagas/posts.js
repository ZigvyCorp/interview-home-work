import { put, takeLatest, takeEvery, call, select } from 'redux-saga/effects';
import { APICaller } from '../axios';
import {
  TYPES,
  fetchNewestPosts as fetchNewestPostsAction,
  fetchNewestPostsSucceed,
  fetchNewestPostsFailed,
  fetchPostDetailSucceed,
  fetchPostDetailFailed
} from '../actions/posts';

const getPosts = state => state.posts.toJS();

function* fetchNewestPosts(action) {
  const { payload: { isRefreshed } } = action;
  try {
    const { search = '', offset, limit, totalCount } = yield select(getPosts);
    if (isRefreshed || (!isRefreshed && offset < totalCount)) {
      window.scrollTo(0, 0)
      const { data } = yield call(APICaller.get, `/posts?offset=${offset}&limit=${limit}&search=${search}`);
      yield put(fetchNewestPostsSucceed({data, isRefreshed})); 
    }
  } catch (e) {
    yield put(fetchNewestPostsFailed(e.message))
  }
};

function* setFilter(action) {
  yield put(fetchNewestPostsAction({ isRefreshed: true }))
};

function* fetchPostDetail(action) {
  const { payload: { id } } = action;
  try {
    window.scrollTo(0, 0)
    const { data: { data } } = yield call(APICaller.get, `/posts?id=${id}`);
    const post = data[0]
    yield put(fetchPostDetailSucceed({post}));
  } catch (e) {
    yield put(fetchPostDetailFailed(e.message))
  }
};

function* postsSaga() {
  yield takeLatest(TYPES.POSTS_FETCH_NEWEST_POSTS, fetchNewestPosts),
  yield takeLatest(TYPES.POSTS_SET_FILTER, setFilter)
  yield takeEvery(TYPES.POST_FETCH_POST_DETAIL, fetchPostDetail)
};

export default postsSaga;
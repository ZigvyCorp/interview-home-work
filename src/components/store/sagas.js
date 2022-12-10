import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import { fetchPosts } from './fetching-functions';
import { POSTS_PER_PAGE, TOTAL_POSTS } from './pagination-constants';

const baseUrl = 'http://jsonplaceholder.typicode.com/';
function* fetchPostsSaga() {
  yield takeLatest(
    [actions.GET_POSTS, actions.GET_NEXT_POSTS],
    function* ({ type }) {
      try {
        console.log('run middleware');
        const { currentPage, hasNextPage } = yield select(
          (state) => state.posts
        );

        if (!hasNextPage) {
          const restOfPosts = TOTAL_POSTS % POSTS_PER_PAGE;
          if (restOfPosts === 0) {
            return;
          }

          const posts = yield call(
            fetchPosts,
            `${baseUrl}posts?_start=${
              currentPage * POSTS_PER_PAGE
            }&_limit=${restOfPosts}`
          );

          yield put(actions.getPostsSuccess(posts));
        }

        const posts = yield call(
          fetchPosts,
          `${baseUrl}posts?_start=${
            currentPage * POSTS_PER_PAGE
          }&_limit=${POSTS_PER_PAGE}`
        );

        if (type === actions.GET_POSTS) {
          yield put(actions.getPostsSuccess(posts));
        } else {
          yield put(actions.getNextPostsSuccess(posts));
        }

        if (type === actions.GET_POSTS) {
          yield put(actions.getNextPosts());
        }
      } catch (error) {
        if (type === actions.GET_POSTS) {
          yield put(actions.getPostsFailure());
        } else {
          yield put(actions.getNextPostsFailure());
        }
      }
    }
  );
}

export default fetchPostsSaga;

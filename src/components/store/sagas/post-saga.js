import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from '../actions/post-actions';
import { fetchPosts } from '../fetching-functions/fetch-posts';
import { BASE_URL, POSTS_PER_PAGE } from '../pagination-constants';

const getEndpoint = (currentPage, limit) =>
  `${BASE_URL}posts?_start=${
    currentPage * POSTS_PER_PAGE
  }&_limit=${limit}&_expand=user`;

function* fetchPostsSaga() {
  yield takeLatest(
    [actions.GET_POSTS, actions.GET_NEXT_POSTS],
    function* ({ type }) {
      try {
        const { currentPage, hasNextPage, totalPosts } = yield select(
          (state) => state.posts
        );

        if (!hasNextPage) {
          const restOfPosts = totalPosts % POSTS_PER_PAGE;
          if (restOfPosts === 0) {
            return;
          }

          const response = yield call(
            fetchPosts,
            getEndpoint(currentPage, restOfPosts)
          );

          yield put(
            actions.getPostsSuccess(
              response.posts,
              response.totalPosts
            )
          );
        }

        const response = yield call(
          fetchPosts,
          getEndpoint(currentPage, POSTS_PER_PAGE)
        );

        if (type === actions.GET_POSTS) {
          yield put(
            actions.getPostsSuccess(
              response.posts,
              response.totalPosts
            )
          );
          yield put(actions.getNextPosts());
        } else {
          yield put(
            actions.getNextPostsSuccess(
              response.posts,
              response.totalPosts
            )
          );
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

import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/post-actions';
import { fetchPosts } from '../fetching-functions/fetch-posts';
import { BASE_URL } from '../pagination-constants';

const getEndpoint = (searchValue) =>
  `${BASE_URL}posts?title_like=${searchValue}&_expand=user`;

function* fetchMatchingPostsSaga() {
  yield takeLatest(
    [actions.GET_MATCHING_POSTS],
    function* ({ searchValue }) {
      try {
        const response = yield call(
          fetchPosts,
          getEndpoint(searchValue)
        );

        yield put(actions.getMatchingPostsSuccess(response.posts));
      } catch (error) {
        yield put(actions.getMatchingPostsFailure());
      }
    }
  );
}

export default fetchMatchingPostsSaga;

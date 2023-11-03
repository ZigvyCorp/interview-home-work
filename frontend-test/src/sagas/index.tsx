import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS } from "../store/types/post.type";
import { FETCH_COMMENTS, fetchCommentsOfPostSuccess, fetchPostsSuccess, fetchUsersSuccess, fetchCommentsOfPost } from "../store/actions";
import { FETCH_USERS } from '../store/types/user.type';
import { FetchCommentsAction } from '../store/types/comment.type';

function* fetchPostsSaga(): any {
  try {
    const response = yield call(axios.get, process.env.REACT_APP_API_URL + '/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    console.log(error)
  }
}

function* fetchUsersSaga(): any {
  try {
    const response = yield call(axios.get, process.env.REACT_APP_API_URL + '/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    console.log(error)
  }
}

function* fetchComments(action: FetchCommentsAction): any {
  try {
    const { id } = action.payload;

    const response = yield call(axios.get, process.env.REACT_APP_API_URL + `/posts/${id}/comments`);
    yield put(fetchCommentsOfPostSuccess(response.data));
  } catch (error) {
    console.log(error)
  }
}

function* rootSaga () {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
  yield takeLatest(FETCH_COMMENTS, fetchComments);
}

export default rootSaga;
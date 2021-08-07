import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
    try {
      const  posts = yield call(api.fetchPosts);
      yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
      console.error(err);
      yield put(actions.getPosts.getPostsFailure(err));
    }
  }
  
function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
}

export default mySaga;

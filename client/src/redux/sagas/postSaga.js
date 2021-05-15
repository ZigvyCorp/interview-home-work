import { takeLatest, call, put } from 'redux-saga/effects';
import * as postActions from '../actions/post';
import * as postAPI from '../../api/postAPI';

function* fetchPostsSaga(action){
    const posts = yield call(postAPI.fetchPosts);
    yield put(postActions.getPosts.getPostsSuccess(posts.data));
}


function* postSaga() {
    yield takeLatest(postActions.getPosts.getPostsRequest,fetchPostsSaga);
}

export default postSaga;
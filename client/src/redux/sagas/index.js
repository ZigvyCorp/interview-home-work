
import {takeLatest,call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action){

    try {
         const posts = yield call(api.fetchPosts);

         console.log('[posts]', posts);
    
         yield put(actions.getPosts.getPostSuccess(posts.data));
    } catch (error) {
         console.log(error);
         yield put(actions.getPosts.getPostFailure(error));
    }
 
}


function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostSaga);
   }
   
   export default mySaga;
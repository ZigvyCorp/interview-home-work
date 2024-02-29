import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { setAllPost } from '../features/posts/postsSlice';
import { setAllUsers } from '../features/users/usersSlice';

import { getAllPost } from './posts';
import { getAllUsers } from './users';
import { getCommentByPostId } from './comments';
import { addCommentByPostId } from '../features/comments/commentsSlice';
import { SET_POST_ID } from '../app/action/actionType';

function* handleGetAllPosts(): SagaIterator{
    try{
        const response=yield call(getAllPost)
        yield put(setAllPost(response.data))
    }catch(error){
        console.error(error)
    }
}

function * handleGetAllUsers():SagaIterator{
    try{
        const response=yield call(getAllUsers)
        yield put(setAllUsers(response.data))

    }catch(error){
        console.error(error)
    }
}

// function * handleGetCommentsByPostId(action:any):SagaIterator{
//     try{
//         const response=yield call(getCommentByPostId, action.payload as number)
//         console.log(response)
//         yield put(addCommentByPostId(response.data))
//     }catch(error){
//         console.error(error)
//     }
// }

function* handleGetCommentsByPostId(postId:number):SagaIterator {
    try {
      const response = yield call(getCommentByPostId, postId);
      console.log(postId);
      yield put(addCommentByPostId(response.data))
    } catch (error) {
      console.error(error);
    }
  }
  
  // Watcher saga to handle SET_POST_ID actions
  function* watchSetPostId() {
    yield takeEvery(SET_POST_ID, function* (action:any) {
      yield call(handleGetCommentsByPostId, action.payload);
    });
  }

export default function * rootSaga(){
    yield all([
        handleGetAllPosts(),
        handleGetAllUsers(),
        watchSetPostId() 
    ])
}
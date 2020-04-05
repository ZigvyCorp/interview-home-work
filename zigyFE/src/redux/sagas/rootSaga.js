import {all} from 'redux-saga/effects';
import {loginWatcherSaga, signUpWatcherSaga} from './sessionSaga';
import { getPostWatcherSaga, getPostByKeywordWatcherSaga, createPostWatcherSaga} from "./postSaga";
export default function* rootSaga(){
    yield all([createPostWatcherSaga(),
               loginWatcherSaga(), 
               signUpWatcherSaga(), 
               getPostWatcherSaga(), 
               getPostByKeywordWatcherSaga()
            ]);
}
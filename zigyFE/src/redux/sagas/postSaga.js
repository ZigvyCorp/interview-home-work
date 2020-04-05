import {updatePost} from "../actions/postAction";
import history from '../../history';
import {takeLatest, call, put } from 'redux-saga/effects';
import {getAllPostAPI, getPostByKeywordAPI, createPostAPI} from "../axios/postAxios";

function* getPostEffectSaga(){
    try {
        let {data} = yield call(getAllPostAPI);
        //Object.keys(data).forEach(key => localStorage.setItem(key,data[key]));
        yield put(updatePost(data));
    } catch(e){
        alert(e)
    }
}

function* getPostByKeywordEffectSaga(action){
    try {
        let {data} = yield call(getPostByKeywordAPI, action.payload);
        //Object.keys(data).forEach(key => localStorage.setItem(key,data[key]));
        yield put(updatePost(data));
    } catch(e){
        alert(e)
    }
}

function* createPostEffectSaga(action){
    try {
        yield call(createPostAPI, action.payload);
        //Object.keys(data).forEach(key => localStorage.setItem(key,data[key]));
        history.push('/home');;
    } catch(e){
        alert(e)
    }
}

export function* getPostWatcherSaga(){
     yield takeLatest('GETPOST_WATCHER', getPostEffectSaga);
}

export function* createPostWatcherSaga(){
     yield takeLatest('CREATEPOST_WATCHER', createPostEffectSaga);
}

export function* getPostByKeywordWatcherSaga(){
     yield takeLatest('GETPOSTBYKEYWORD_WATCHER', getPostByKeywordEffectSaga);
}


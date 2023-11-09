import { takeEvery, put, takeLatest } from 'redux-saga/effects';

import axiosClient from '../../api/axios.config';
import { getListPostSuccess } from './postAction';
import { GET_LIST_POST } from './postConstant';
function* getPosts() {
    
   
    try {
        let data = yield axiosClient.get('/posts');
        yield put(getListPostSuccess(data));
        } catch (error) {
        //handle error
        }
}

function* onLoadPost() {
    yield takeEvery(GET_LIST_POST, getPosts);
}

export default onLoadPost;

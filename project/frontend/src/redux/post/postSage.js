import { takeEvery, put, takeLatest } from 'redux-saga/effects';

import axiosClient from '../../api/axios.config';
import { getListPostSuccess, getPostSuccess } from './postAction';
import { GET_LIST_POST, GET_POST } from './postConstant';
function* getPosts(data) {
    try {
        let res = yield axiosClient.get(`/posts${data.payload}`);
        yield put(getListPostSuccess(res));
        } catch (error) {
        //handle error
        }
}
function* getPost(data) {
    try {
        let res = yield axiosClient.get(`/posts/${data.payload}`);
        yield put(getPostSuccess(res));
        } catch (error) {
        //handle error
        }
}
function* onLoadPost() {
    yield takeEvery(GET_LIST_POST, getPosts);
    yield takeEvery(GET_POST,getPost);
}

export default onLoadPost;

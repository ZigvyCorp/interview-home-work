import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Gọi API
function fetchCommentsApi(postId, content) {
    return axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { content: content }, {
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

}

// Saga worker
function* fetchComments(action) {
    try {
        const { postId, content } = action.payload;
        const response = yield call(fetchCommentsApi, postId, content);
        yield put({ type: 'FETCH_COMMENTS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'FETCH_COMMENTS_FAILURE', payload: error.message });
    }
}

// Saga watcher
function* commentsSaga() {
    yield takeEvery('FETCH_COMMENTS_REQUEST', fetchComments);
}

export default commentsSaga;
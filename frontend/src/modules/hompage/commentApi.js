import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios';
import { getComments, setComments, postComment } from './commentSlice';

function apiFetchComment(value) {
    return axios.get(process.env.REACT_APP_API_URL + '/comment/' + value)
}

function* fecthComment(action) {
    const comment = yield call(apiFetchComment, action.payload)
    yield put(setComments(comment.data.data))
    
}

function apiPostComment(value) {
   return axios.post(process.env.REACT_APP_API_URL + '/comment/' + value)
}

function* postCommentData(action) {
    yield call(apiPostComment, action.payload)
    yield put(getComments())
    
}

function* commentSaga() {
  yield takeLatest(getComments.type, fecthComment)
  yield takeLatest(postComment.type, postCommentData)
}

export default commentSaga
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios';
import { getBlogs, setBlogs, postBlog } from './blogSlice';

function apiFetchBlog(filterParams) {
    return axios.get(process.env.REACT_APP_API_URL + '/blog', {params: filterParams})
}

function* fecthBlog(action) {
    const blog = yield call(apiFetchBlog, action.payload )
    yield put(setBlogs(blog.data.data))
    
}

function apiPostBlog(value) {
   return axios.post(process.env.REACT_APP_API_URL + '/blog', value)
}

function* postBlogData(action) {
    yield call(apiPostBlog, action.payload)
    yield put(getBlogs())
    
}

function* blogSaga() {
  yield takeLatest(getBlogs.type, fecthBlog)
  yield takeLatest(postBlog.type, postBlogData)
}

export default blogSaga
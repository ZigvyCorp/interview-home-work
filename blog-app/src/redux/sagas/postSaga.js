import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

// Saga to handle fetching posts with pagination
function* fetchPostsSaga(action) {
    const { page = 1, limit = 10 } = action.payload || {}; // Lấy trang và limit từ action.payload

    try {
        // Gọi API với page và limit tương ứng
        const response = yield call(axios.get, `http://172.20.10.4:3000/api/posts?page=${page}&limit=${limit}`);

        // Giả sử API trả về cấu trúc { posts, currentPage, totalPages, totalPosts }
        const data = response.data;

        // Dispatch action thành công và cập nhật state
        yield put(fetchPostsSuccess(data));
    } catch (error) {
        // Dispatch action thất bại nếu có lỗi
        yield put(fetchPostsFailure(error.message));
    }
}

// Watcher saga để lắng nghe action FETCH_POSTS
export default function* postSaga() {
    yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}

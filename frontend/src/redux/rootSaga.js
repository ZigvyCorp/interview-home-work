import { all } from 'redux-saga/effects';
import { watchFetchPosts } from '../features/Posts/Services/postSaga';


function* rootSaga() {
    yield all([
        watchFetchPosts(),
        // Thêm các saga khác nếu cần
    ]);
}

export default rootSaga;
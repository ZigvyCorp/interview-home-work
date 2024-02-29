import { all } from 'redux-saga/effects';
import watchFetchPosts from '../features/Posts/Services/postSaga';
import watchFetchComments from '../features/Comments/Services/commentSaga';
import watchFetchPostSearch from '../features/PostSearch/Services/postSearchSaga';


function* rootSaga() {
    yield all([
        watchFetchPosts(),
        watchFetchComments(),
        watchFetchPostSearch()
        // Thêm các saga khác nếu cần
    ]);
}

export default rootSaga;
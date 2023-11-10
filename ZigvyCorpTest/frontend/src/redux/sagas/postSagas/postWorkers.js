import { call, put, select } from 'redux-saga/effects';
import { API } from '../../apis';
import { postActions } from '../../actions';
import { postConsts } from '../../constants';
function* getListPostWorker(action) {
    try {
        const inforListPost = yield call(API.getListPostData, action.payload);
        yield put(postActions.getListPostActionSuccess(inforListPost));
    } catch (error) {
        yield put(postActions.getListPostActionFail(error));
    }
}
function* getCommentInPostWorker(action) {
    try {
        const state = yield select(); // Lấy state hiện tại từ Redux
        const arrComment = state.postStates.commentsData;
        const id = action.payload._id;
        const hasOb1Value = arrComment.some((item) => item.post == id);
        if (hasOb1Value) {
            yield put({ type: postConsts.DEFAULT });
        } else {
            const inforCommentInPost = yield call(API.getCommentsInPostData, action.payload);
            yield put(postActions.getCommentsInPostActionSuccess(inforCommentInPost));
        }
    } catch (error) {
        yield put(postActions.getCommentsInPostActionFail(error));
    }
}
function* searchPostWorker(action) {
    try {
        const inforSearchPost = yield call(API.searchPostData, action.payload);
        yield put(postActions.searchPostActionSuccess(inforSearchPost));
    } catch (error) {
        yield put(postActions.searchPostActionFail(error));
    }
}

export { getListPostWorker, getCommentInPostWorker, searchPostWorker };

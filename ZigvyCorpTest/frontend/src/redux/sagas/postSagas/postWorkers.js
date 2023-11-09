import { call, put } from 'redux-saga/effects';
import { API } from '../../apis';
import { postActions } from '../../actions';

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
        const inforCommentInPost = yield call(API.getCommentsInPostData, action.payload);
        yield put(postActions.getCommentsInPostActionSuccess(inforCommentInPost));
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

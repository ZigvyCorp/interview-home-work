import { all } from 'redux-saga/effects';
import * as InterviewSaga from "./Interview/InterviewSaga"
export function* rootSaga() {
    // ! all: theo dõi toàn bộ action
    yield all([
        InterviewSaga.theoDoiGetAllPost(),
        InterviewSaga.theoDoiGetAllUser(),
        InterviewSaga.theoDoiGetAllComment(),
        InterviewSaga.theoDoiGetDetailPostSaga(),
        InterviewSaga.theoDoiGetCommentsSaga(),
    ])
}
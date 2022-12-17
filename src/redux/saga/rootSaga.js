import { all } from 'redux-saga/effects';
import { actionComment } from '../actions/actionComment';
import  {actionGetPost}  from '../actions/actionPost';
import { actionUser } from '../actions/actionUser';

export default function* rootSaga() {
    yield all([
        actionGetPost(),
        actionUser(),
        actionComment(),
    ]);
}
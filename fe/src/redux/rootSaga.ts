import { all } from 'redux-saga/effects';
import { userSaga } from './saga/userSaga';
import { postSaga } from './saga/postSaga';
import { commentSaga } from './saga/commentSaga';


export function* rootSaga() {
	yield all([userSaga(), postSaga(), commentSaga()]);
}

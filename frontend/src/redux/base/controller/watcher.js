import { all } from 'redux-saga/effects';
import { watcherPost } from '../../controllers/watcherPost';
import { watcherComment } from '../../controllers/watcherComment';
import { watcherUser } from '../../controllers/watcherUser';

export default function* rootSaga() {
    yield all([
        watcherPost(),
        watcherComment(),
        watcherUser(),
    ]);
}
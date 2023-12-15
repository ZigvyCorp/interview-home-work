import { all } from 'redux-saga/effects';
import postWatchers from './postSagas/postWatchers';

export default function* rootSaga() {
    yield all([...postWatchers]);
}

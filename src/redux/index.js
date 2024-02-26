import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './watcher';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage
};

const reducers = persistReducer(rootPersistConfig, rootReducer);
const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(reducers, applyMiddleware(...middleWares));

saga.run(rootSaga);

export default store;
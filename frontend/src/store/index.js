import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './saga';
import rootReducer from './reducer';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare, logger));

export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export default store;
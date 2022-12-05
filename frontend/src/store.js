import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/base/model/reducer';
import rootWatcher from './redux/base/controller/watcher';

const saga = createSagaMiddleware();
const middlewares = [saga];

const persistConfig = {
    key: 'root',
    storage,

    // BLACKLIST
    blacklist: ['cart'] // cart will not be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ reducer: persistedReducer, middleware: middlewares, devTools: true });
const persistor = persistStore(store)


saga.run(rootWatcher);

export default store;
export { persistor };
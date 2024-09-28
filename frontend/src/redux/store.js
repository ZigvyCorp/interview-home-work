import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import rootSaga from './rootSaga';
import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'posts']
};

const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

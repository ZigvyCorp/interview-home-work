import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import commentsReducer from './commentsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import { watchFetchPosts } from '../saga/postsSaga';
import { watchFetchComments } from '../saga/commentsSaga';
import { watchFetchUsers } from '../saga/usersSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(watchFetchPosts);
sagaMiddleware.run(watchFetchComments);
sagaMiddleware.run(watchFetchUsers);

export { persistor };

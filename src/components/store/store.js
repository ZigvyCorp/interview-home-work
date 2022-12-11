import createSagaMiddleware from 'redux-saga';
import fetchPostsSaga from './sagas/post-saga';
import fetchMatchingPostsSaga from './sagas/matching-post-saga';
import fetchCommentsSaga from './sagas/comment-saga';
import postReducer from './reducers/post-reducer';
import commentReducer from './reducers/comment-reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

function createPersistence(sagaMiddleware) {
  const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
  });

  const rootPersistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(
    rootPersistConfig,
    rootReducer
  );

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActionPaths: [
            'commentsDataMap',
            'totalCommentsMap',
            'register',
            'rehydrate'
          ]
        }
      }),
      sagaMiddleware
    ]
  });
  return { store, persistor: persistStore(store) };
}

export function initiateReduxStore() {
  const sagaMiddleware = createSagaMiddleware();
  const persistence = createPersistence(sagaMiddleware);

  function* rootSaga() {
    yield all([
      fetchPostsSaga(),
      fetchCommentsSaga(),
      fetchMatchingPostsSaga()
    ]);
  }
  sagaMiddleware.run(rootSaga);

  return persistence;
}

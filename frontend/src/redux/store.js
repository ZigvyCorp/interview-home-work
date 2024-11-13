/**
 * @file store.js
 * @description This file sets up the Redux store with Redux Toolkit, Redux Saga, and Redux Persist.
 * It configures the store with a persisted reducer and applies the saga middleware.
 * 
 * @module store
 */

 /**
  * @typedef {Object} PersistConfig
  * @property {string} key - The key for the persisted state.
  * @property {Object} storage - The storage engine to use for persisting state.
  */

 /**
  * @constant {PersistConfig} persistConfig - Configuration for Redux Persist.
  */

 /**
  * @constant {Function} persistedReducer - The root reducer wrapped with persist capabilities.
  */

 /**
  * @constant {Function} sagaMiddleware - Middleware to run Redux Sagas.
  */

 /**
  * @constant {Object} store - The configured Redux store.
  * @property {Function} dispatch - Dispatches an action.
  * @property {Function} getState - Returns the current state.
  * @property {Function} subscribe - Adds a change listener.
  * @property {Function} replaceReducer - Replaces the current reducer.
  */

 /**
  * @constant {Object} persistor - The persistor object for the store.
  * @property {Function} persist - Persists the store.
  * @property {Function} purge - Purges the persisted state.
  */

 /**
  * @function run - Runs the root saga.
  * @memberof sagaMiddleware
  */
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
import { configureStore } from '@reduxjs/toolkit';
import createEpicMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import {postSaga, commentSaga} from './sagas'
import rootReducer from './reducers/rootReducer';
// import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key : any) {
      return Promise.resolve(null);
    },
    setItem(_key : any, value : any) {
      return Promise.resolve(value);
    },
    removeItem(_key : any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === "undefined" ? createNoopStorage() : createWebStorage('local');

const sagaMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer, 
  middleware: [sagaMiddleware],
})

export const persistor = persistStore(store)

sagaMiddleware.run(postSaga)
sagaMiddleware.run(commentSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["comment"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

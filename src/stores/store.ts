import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import { rootReducer } from "./rootReducer";

import { persistReducer } from "redux-persist";

// import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "blog",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

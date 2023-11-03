import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducers from "./slices/rootReducers";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

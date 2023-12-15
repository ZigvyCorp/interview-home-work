import { configureStore, Middleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};
const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware as Middleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

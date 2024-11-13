import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"; // Your root reducer
import rootSaga from "../sagas/sagas"; // Your root saga

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore specific actions
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

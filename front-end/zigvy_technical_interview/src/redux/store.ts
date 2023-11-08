import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./slice/rootReducer";
import { persistStore } from "redux-persist";
import { rootSaga } from "./saga/rootSaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;

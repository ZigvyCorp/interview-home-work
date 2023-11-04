import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  reducer
);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

const persistor = persistStore(store);

export { store, persistor };

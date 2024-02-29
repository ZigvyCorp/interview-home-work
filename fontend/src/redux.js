import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/sagas";
import "regenerator-runtime/runtime";
import rootReducer from "./store/reducers/rootReducer";
import { thunk } from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const reducStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, thunk)
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};


export default reducStore;

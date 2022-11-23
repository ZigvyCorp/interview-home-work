import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import persistedReducer from "./reducers";
import persistStore from "redux-persist/es/persistStore";


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

// Then run the saga
sagaMiddleware.run(rootSaga);

export default {
  store,
  persistor,
};

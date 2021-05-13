import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;

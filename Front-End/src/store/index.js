import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();
const middleware=[sagaMiddleware];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware,thunk))
);

sagaMiddleware.run(rootSaga);

export default store;

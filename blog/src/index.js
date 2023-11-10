import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reducers from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/sagas";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

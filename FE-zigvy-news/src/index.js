import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/index";
import rootSaga from "./sagas/index";
import ZigvyNews from "./App";
import * as serviceWorker from "./serviceWorker";
import Loader from "./components/loader";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Loader />
        <ToastContainer />
        <ZigvyNews />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // sử dụng local storage
import createSagaMiddleware from "redux-saga";
import App from "./App.jsx";
import "./index.css";
import myFirstReducer from "./redux/reducer.jsx";

import mySaga from "./sagas/sagas.jsx";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({ myFirstReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export { persistor, store };

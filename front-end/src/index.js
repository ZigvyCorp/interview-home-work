import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";
import userReducer from "./reducers/userReducer";
import mySaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
const root = ReactDOM.createRoot(document.getElementById("root"));

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

sagaMiddleware.run(mySaga);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

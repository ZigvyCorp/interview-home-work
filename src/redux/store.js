import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  timeout: 500,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(reducers, compose(applyMiddleware(thunk))); <-- without persist
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

export default store;

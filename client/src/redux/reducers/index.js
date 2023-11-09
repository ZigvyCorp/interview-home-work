import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import postReducer from "./postReducer.js";
import authReducer from "./authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  postReducer,
  authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor };

export default store;

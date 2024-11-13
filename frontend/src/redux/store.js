import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "@reduxjs/toolkit";
import commentReducer from "../features/comment/commentSlice";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/user/userSlice";
import rootSaga from "./sagas/rootSaga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { loginReducer } from "./persit/reducer/loginReducer";
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer", "post"],
  blacklist: ["comment", "user"],
};
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
  loginReducer: loginReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export { store, persistor };

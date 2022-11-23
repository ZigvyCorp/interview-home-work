import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "./authReducer";
import postReducer from "./postReducer";


const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["error", "loading"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  post: postReducer,
});


export default rootReducer;

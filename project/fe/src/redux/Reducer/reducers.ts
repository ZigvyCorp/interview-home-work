import { combineReducers } from "redux";
import socketReducer from "./SocketReducer.ts";
import authReducer from "./UserReducer.ts";
import blogReducer from "./blogReducer.ts";

export const rootReducer = combineReducers({
  socketReducer,
  authReducer,
  blogReducer,
});

import { combineReducers } from "redux";
import appReducer from "./reducer/app";

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;

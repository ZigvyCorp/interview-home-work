import { combineReducers } from "redux";
import postReducers from "./postReducers";

const allReducers = combineReducers({
  postReducers,
});

export default allReducers;

import { combineReducers } from "redux";

import { loadingReducer as loading } from "../utils/api";
import { errorReducer as error } from "../utils/api";

import home from "../pages/home/redux";

const appReducer = combineReducers({
  loading,
  error,
  home
});

export default appReducer;

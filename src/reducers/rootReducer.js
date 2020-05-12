import { combineReducers } from "redux";
import authReducer from "./authReducer";

const initState = {
  test: "abcdef",
};

export default combineReducers({
  authReducer,
});

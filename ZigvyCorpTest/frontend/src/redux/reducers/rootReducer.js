import { combineReducers } from "redux";
import userReducers from "./userReducers";
import productReducers from "./productReducers";

const rootReducer = combineReducers({
  productInitState: productReducers,
  userReducerInitState: userReducers,
});
export default rootReducer;

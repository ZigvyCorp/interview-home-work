import { combineReducers } from "redux";
import postSlice from "./postSlice";
const rootReducer = combineReducers({
  postStates: postSlice,
});
export default rootReducer;

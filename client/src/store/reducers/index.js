import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;

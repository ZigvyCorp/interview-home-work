
import { combineReducers } from "redux";
import postReducer from "./postState";
import commentReducer from "./commentState";


const rootReducer = combineReducers({
  postReducer,
  commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

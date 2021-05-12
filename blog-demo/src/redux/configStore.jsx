import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import reduxThunk from "redux-thunk";
import { postReducer } from "./reducers/postReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { loadingReducer } from "./reducers/loadingReducer";

const rootReducers = combineReducers({
  userReducer,
  postReducer,
  commentsReducer,
  loadingReducer,
});

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));

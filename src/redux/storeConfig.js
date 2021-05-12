import { combineReducers, createStore } from "redux";

import post from './reducers/post'
import user from './reducers/user'
import comment from './reducers/comment'
import combineData from './reducers/combineData'


//create root reducer
const reducer = combineReducers({
  post,
  user,
  comment,
  combineData,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

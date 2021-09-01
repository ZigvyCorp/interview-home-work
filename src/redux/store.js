import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./reducers/posts";
import usersReducer from "./reducers/users";
import commentsReducer from "./reducers/comments";
import { watcherSaga } from "./sagas/sagas";

const reducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
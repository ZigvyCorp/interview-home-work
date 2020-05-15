import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { postReducer, PostState } from "./post/reducer";
import { saga } from "./saga";

export interface AppState {
  posts: PostState;
}

const reducer = combineReducers({
  posts: postReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export { store };

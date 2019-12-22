import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import blogs from './reducers/blogs';
import authen from './reducers/authen';
import createNewPost from './reducers/createNewPost';
import { 
  watchBlogs,
  watchAuthen,
  watchCreateNewPost
} from "./sagas";

const composeEnhancers =
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  blogs,
  authen,
  createNewPost
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchBlogs);
sagaMiddleware.run(watchAuthen);
sagaMiddleware.run(watchCreateNewPost);

export default store;
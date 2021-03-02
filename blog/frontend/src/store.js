import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { watcherSaga } from './sagas/index.js';
import { getPostsReducer } from './reducers/postReducer.js';
import { getUserByIdReducer, getUsersReducer } from './reducers/userReducer.js';
import { getCommentsReducer } from './reducers/commentReducer.js';

const reducer = combineReducers({
  posts: getPostsReducer,
  users: getUsersReducer,
  comments: getCommentsReducer,
  userById: getUserByIdReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;

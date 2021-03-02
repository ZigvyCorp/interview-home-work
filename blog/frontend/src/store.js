import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { watcherSaga } from './sagas/index.js';
import { getPostsReducer } from './reducers/postReducer.js';
import { getUsersReducer } from './reducers/userReducer.js';

const reducer = combineReducers({
  posts: getPostsReducer,
  users: getUsersReducer,
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

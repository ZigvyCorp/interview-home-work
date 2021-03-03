import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { watcherSaga } from './sagas/saga.js';
import { getPostsReducer } from './reducers/postReducer.js';
import { getUserByIdReducer } from './reducers/userReducer.js';
import {
  getCommentsByPostIdReducer,
  getCommentsReducer,
} from './reducers/commentReducer.js';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const reducer = combineReducers({
  postsInfo: getPostsReducer,
  comments: getCommentsReducer,
  userById: getUserByIdReducer,
  commentsByPostId: getCommentsByPostIdReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const initialState = {};

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

export { store, persistor };

import { legacy_createStore as createStore , applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';  // New package
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postReducer from './reducers/postReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  posts: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };


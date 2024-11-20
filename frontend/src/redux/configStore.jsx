import { applyMiddleware, combineReducers, createStore } from 'redux';
import LoadingReducer from './reducers/LoadingReducer';
import reduxThunk from 'redux-thunk';
import InterviewReducer from './reducers/InterviewReducer';
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}


//! middleware saga

const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
  //! Khai báo reducer tại đây
  LoadingReducer,
  InterviewReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


// const store = createStore(
//   rootReducer,
//   applyMiddleware(reduxThunk, middleWareSaga)
// );

const store = createStore(
persistedReducer,
  applyMiddleware(reduxThunk, middleWareSaga)
);
middleWareSaga.run(rootSaga);

export const persistor = persistStore(store)


export default store;

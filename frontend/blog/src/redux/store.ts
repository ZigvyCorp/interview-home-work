import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { BlogActionTypes } from './actions';
import { watchFetchBlog, watchFetchComment, watchFetchDetailBlog } from './saga';
import  { blogReducer,commentReducer} from './reducer';
import searchReducer from './redux/reducer';

const rootReducer = combineReducers({
  blogs: blogReducer,
  search:searchReducer,
  comment:commentReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, 
      serializableCheck: false, 
    }).concat(sagaMiddleware),
  devTools: { name: 'blog' },
});

function* rootSaga() {
  yield all([watchFetchBlog(), watchFetchComment(), watchFetchDetailBlog()]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppActions = BlogActionTypes;

export default store;

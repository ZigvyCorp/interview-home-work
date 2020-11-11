import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import postReducer from '../slices/postSlice'
import userInfoReducer from '../slices/useInfoSlice'
import commentReducer from '../slices/commentSlice'

import { watchPostRequest } from '../sagas/postSaga'
import { watchUserInfoRequest } from '../sagas/userSaga'
import { watchCommentRequest } from '../sagas/commentSaga'

function* rootSaga() {
  yield all([
    watchPostRequest(),
    watchUserInfoRequest(),
    watchCommentRequest()
  ])
}

const reducers = combineReducers({
  post: postReducer,
  user: userInfoReducer,
  comments: commentReducer
})

const sagaMiddleWare = createSagaMiddleware()
const middlewares = [sagaMiddleWare]

export const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware({
      serializableCheck: false
    }), ...middlewares],
  });

  sagaMiddleWare.run(rootSaga)
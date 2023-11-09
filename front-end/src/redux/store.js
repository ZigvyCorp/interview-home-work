import { combineReducers, createStore } from "redux"
import { postReducer } from "./postReducer"
import { userReducer } from "./userReducer"
import { commentReducer } from "./commentReducer"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/es/persistStore"

const persistConfig = {
  key: "root",
  storage
}

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)

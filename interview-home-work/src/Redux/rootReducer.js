import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./Reducers/PostsReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./Saga/rootSaga";
import CommentReducer from "./Reducers/CommentReducer";
import UsersReducer from "./Reducers/UsersReducer";


// Import redux persist
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root', // Key on local storage
  storage,
}

// Pass key and data that reducer you would like to store
const PostsReducerPersist = persistReducer(persistConfig, PostsReducer)

const middleWareSaga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    // PostsReducer,
    PostsReducerPersist, // Change old reducer to new persis reducer 
    CommentReducer,
    UsersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWareSaga)
})

middleWareSaga.run(rootSaga)

export const persistor = persistStore(store) // Expert persistor to used in PersisGate

export default store
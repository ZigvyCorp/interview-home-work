// store.js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux"; // Import combineReducers
import postReducer from "../redux/reducer/postReducer";
import commentReducer from "./reducer/commentReducer";
import postSaga from "../redux/sagas/postSaga";
import commentSaga from "./sagas/commentSaga";
import userReducer from "./reducer/userReducer";
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
};

// Tạo root reducer bằng cách kết hợp các reducers
const persistPostReducer = persistReducer(persistConfig, postReducer)
const persistCommentReducer = persistReducer(persistConfig, commentReducer)
const persistUserReducer = persistReducer(persistConfig, userReducer)

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    users: userReducer
});
const persistRootReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistRootReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(postSaga);
sagaMiddleware.run(commentSaga);
sagaMiddleware.run(userSaga);

export { store, persistor };

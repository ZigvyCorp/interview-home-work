import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/postsReducer.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { rootSaga } from "../saga/index.js";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, postsReducer);

const store = configureStore({
    reducer: {
        postsReducer: persistedReducer,
    }, 
    middleware: [sagaMiddleware]
    
})

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducer/rootReducer";
import  rootSaga  from "../api/saga";

const sagaMiddleWare=createSagaMiddleware()

const persistConfig={
    key:'root',
    storage,
    blacklist: ['comments','users']
}

const persisReducer=persistReducer(persistConfig, rootReducer)

const store= configureStore({
    reducer:persisReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
})
sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);

export default store

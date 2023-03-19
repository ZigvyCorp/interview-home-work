import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "antd-mobile-rn";
import React from "react";
import Project from "./src/Loaders";

//Redux
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import createSagaMiddleware from "redux-saga";
import allReducers from "./src/Redux/reducers";
import rootSaga from "./src/Redux/saga";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["navigation"],
};

const pReducer = persistReducer(persistConfig, allReducers);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(pReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer>
          <Project />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

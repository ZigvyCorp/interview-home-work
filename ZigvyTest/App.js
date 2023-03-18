import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Project from "./src/Loaders";

//Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./src/Redux/reducers";
import rootSaga from "./src/Redux/saga";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Project />
      </NavigationContainer>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

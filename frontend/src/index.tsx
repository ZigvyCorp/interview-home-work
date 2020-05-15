import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "reflect-metadata";
import App from "./App";
import { AuthProvider } from "./HOCs/auth-provider";
import { store } from "./redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

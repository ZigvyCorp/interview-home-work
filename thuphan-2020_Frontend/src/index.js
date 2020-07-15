import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome-5-css/css/all.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyFontAwesome5Fix from "@pnotify/font-awesome5-fix";
import * as PNotifyFontAwesome5 from "@pnotify/font-awesome5";
import * as PNotifyBootstrap4 from "@pnotify/bootstrap4";

defaultModules.set(PNotifyFontAwesome5Fix, {});
defaultModules.set(PNotifyFontAwesome5, {});
defaultModules.set(PNotifyBootstrap4, {});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

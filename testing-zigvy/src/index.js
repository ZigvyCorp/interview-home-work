import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Blog from "./component/blog";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <h1>News</h1>
    <App />
  </div>,
  document.getElementById("content")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();

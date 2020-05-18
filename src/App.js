import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Blog from "./container/Blog";

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Blog />
      </div>
    </div>
  );
}

export default App;

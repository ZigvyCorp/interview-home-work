import React from "react";

import TopBar from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Feed from "./Feed";
import Login from "./Login.js";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { selectSignedIn } from "./redux/useSlice.js";

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

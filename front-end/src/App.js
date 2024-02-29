import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

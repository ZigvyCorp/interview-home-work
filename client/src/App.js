import React from "react";
import "./App.css";
import Navbar from "./component/Natbar";
import Post from "./component/Post";
import PostDetail from "./component/PostDetail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;

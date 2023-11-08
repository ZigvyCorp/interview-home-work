import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./component/Home/HomePage";
import PostDetail from "./component/Post_Detail/PostDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:postId" element={<PostDetail />} />
    </Routes>
  );
}

export default App;

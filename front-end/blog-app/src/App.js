import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Blog App</h1>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/:postId" component={PostDetailPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

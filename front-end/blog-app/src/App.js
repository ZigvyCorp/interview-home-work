import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PostList from "./components/PostList";
const App = () => {
  return (
    <Router>
      <div>
        <div className="h2 text-center">Blog App</div>
        <PostList></PostList>
      </div>
    </Router>
  );
};

export default App;

import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./pages/Post";
import AllPost from "./pages/AllPost";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AllPost />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

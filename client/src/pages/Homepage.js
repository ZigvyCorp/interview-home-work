import React from "react";

import PostList from "../components/PostList";
import HeaderPage from "../components/Header";

const Homepage = () => {
  return (
    <div>
      <HeaderPage />
      <PostList />
    </div>
  );
};

export default Homepage;

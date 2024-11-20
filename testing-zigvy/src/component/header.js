import React from "react";
import { Router, Route } from "react-router-dom";

import Blog from "./blog";

const Header = () => {
  return (
    <div>
      <Header>
        <Router>
          <Route path="/blog" component={Blog} />
        </Router>
      </Header>
    </div>
  );
};

export default Header;

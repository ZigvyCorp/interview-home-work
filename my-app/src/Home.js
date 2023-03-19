import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import Feed from "./Feed";

import { selectSignedIn, setSignedIn, setUserData } from "./redux/useSlice.js";
function Home() {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <Feed />
      
    </main>
  );
}

export default Home;

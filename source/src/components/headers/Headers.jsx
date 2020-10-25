import React from "react";
import "./headers.scss";
function Headers(props) {
  return (
    <div className="container">
      <div className="row header">
        <div className="col-5 nav-logo">
            <div className="img-logo"></div>
            <a className="brand">Logo</a>
        </div>
        <div className="col-2 nav-blog">
            <a className="inner" href="#">Blogs</a>
        </div>
        <div className="col-5 nav-avatar">
            <a className="username">Adam Levine</a>
        </div>
      </div>
    </div>
  );
}

export default Headers;

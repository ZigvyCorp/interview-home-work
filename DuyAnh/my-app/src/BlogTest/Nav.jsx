import React from "react";

const Nav = () => {
  return (
    <div className="container">
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Logo
          </a>
          <div className="div">
            <h3>HomePage</h3>
          </div>
          <form className="d-flex" action="">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;

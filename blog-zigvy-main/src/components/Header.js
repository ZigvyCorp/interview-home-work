import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SearchFilter, searchSelector } from "../store/reducers/postSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(SearchFilter(event.target.value));
  };
  const handeEmtySearch = () => {
    dispatch(SearchFilter(""));
  };
  const value = useSelector(searchSelector);
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            src="https://logoart.vn/blog/wp-content/uploads/2010/03/Thiet-ke-logo-dang-cap-sang-tao6.png"
            alt="Italian Trulli"
            onClick={handeEmtySearch}
          />
        </Link>
      </div>

      <form class="d-flex form-search-mofidy">
        <input
          onChange={handleSearch}
          value={value}
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button disabled class="btn btn-outline-success">
          Search
        </button>
      </form>
      <div className="wrap-user-header">
        <img
          className="avatar-any"
          src="https://xaydunghoanghung.com/wp-content/uploads/2020/11/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg"
          alt="Italian Trulli"
        />
        <h1>Ducdete</h1>
      </div>
    </div>
  );
}

export default Header;

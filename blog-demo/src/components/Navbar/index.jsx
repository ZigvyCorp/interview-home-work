import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import Logo from "../../assets/img/zigvy-logo.svg";
import { postSearchAction } from "../../redux/actions/postActions";
import "./Navbar.css";

const Navbar = () => {
  const userKey = localStorage.getItem("user");
  const userValue = JSON.parse(userKey);
  const history = useHistory();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handelLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    dispatch(postSearchAction(search));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!userValue) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <nav className="navbar blog__navbar navbar-expand-sm px-5 navbar-dark bg-warning">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex" id="collapsibleNavId">
          <div className="login ml-auto d-flex align-items-center">
            <form
              className="form-inline my-2 my-lg-0 mr-5"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-danger my-2 my-sm-0" type="button">
                Search
              </button>
            </form>
            {userValue ? (
              <>
                <div className="user d-flex align-items-center">
                  <>
                    <img
                      src="https://i.pravatar.cc/50"
                      alt=""
                      className="mr-2"
                    />

                    <span className="text-danger mr-3">{userValue.name}</span>
                  </>
                  <button
                    type="submit"
                    className="logout"
                    onClick={handelLogout}
                  >
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <button
                className="btn btn-success"
                type="button"
                data-toggle="modal"
                data-target="#modelId"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

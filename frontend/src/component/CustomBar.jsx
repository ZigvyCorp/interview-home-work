import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { eventChannel } from "redux-saga";
function CustomBar({ search, setSearch, handleSearch }) {
  const persistStore = useSelector((state) => state.loginReducer);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };
  const { login_status, name } = persistStore;
  return (
    <>
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center justify-content-md-start align-items-center d-none d-lg-flex">
              <NavLink className="text-reset me-3" to="/">
                <i className="fas fa-th-large"></i>
              </NavLink>
              <aNavLink className="text-reset me-3" to="/">
                <i className="fas fa-home"></i>
              </aNavLink>
              <NavLink className="text-reset me-3" to="/">
                <i className="fas fa-columns me-1"></i>
                <img src="./public/logo.jpg" height="35" />
              </NavLink>

              <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value);
                  }}
                  onKeyDown={handleKeyPress}
                />
                <span className="input-group-text border-0 d-none d-lg-flex">
                  <i className="fas fa-search"></i>
                </span>
                <Button onClick={handleSearch} variant="dark">
                  Search
                </Button>
              </form>
            </div>

            {/*================================= MIDLE FIELD====================== */}
            <div className="col-md-2 d-none d-lg-block">
              <NavLink to="/posts" className="ms-md-2">
                <span className="d-none d-xl-inline-block big-text">BLOG</span>
              </NavLink>
            </div>

            {/*================================= END FIELD====================== */}
            <div className="col-lg-5 d-flex justify-content-center justify-content-md-end align-items-center">
              {login_status ? (
                <>
                  <img src="./public/avatar.png" height={35} alt="" />
                  <span>{name}</span>
                </>
              ) : (
                <Button variant="dark" href="/login">
                  LOGIN
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomBar;

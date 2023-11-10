import React, { FormEvent, useState } from "react";

import logo from "../../assets/Zigvy-logo.jpg";
import avatar from "../../assets/avatar-default.jpg";
import { Image } from "../../components";
import "./style.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pagination } from "../../redux/postAction";

const HeaderLayout = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const onClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(pagination({ key: inputValue }));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="d-flex align-items-center header-search">
          <Link to={"/"} className="navbar-brand">
            <Image src={logo} height={34} alt="Logo"></Image>
          </Link>
          <form className="form-inline d-flex" onSubmit={onClick}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <BsSearch />
            </button>
          </form>
        </div>

        <div>
          <span className="h3">Blogs</span>
        </div>

        <div className="d-flex align-items-center">
          <div>
            <Image src={avatar} alt="avatar" height={30}></Image>
          </div>
          <div className="m-2">
            <span>Your name</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderLayout;

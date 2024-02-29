import React, { useState } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataSearch = useSelector((state) => state.dataSearchPosts.posts);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onChange = (value) => {
    setSelectedOptions([]);
    navigate(`/blog-detail/${value}`);
  };

  // handle when search by title
  const onSearch = async (value) => {
    try {
      dispatch({
        type: "SEARCH_POSTS_REQUEST",
        payload: { title: value },
      });
    } catch (error) {
      console.error("Error searching posts:", error);
    }
  };

  const getDatePart = (date) => {
    const datePart = date.split("T")[0];
    return datePart;
  };

  return (
    <nav className="navbar-wrapper navbar navbar-expand-lg bg-body-tertiary py-1">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img className="nav-img-logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-5 me-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white fw-bolder"
                aria-current="page"
                href="/"
              >
                Blogs
              </a>
            </li>
          </ul>

          <Select
            className="custom-select me-4 my-2 w-25"
            // mode="tags"
            value={selectedOptions}
            showSearch
            placeholder="Search..."
            onChange={onChange}
            onSearch={onSearch}
            // dropdownStyle={{ backgroundColor: "#242526" }}
            notFoundContent={<span className="text-white"></span>}
            optionFilterProp="name" // Chỉ định trường dữ liệu cho việc tìm kiếm
          >
            {dataSearch?.map((item, index) => (
              <Select.Option key={index} value={item._id} name={item.title}>
                <div className="navbar-item-search">
                  <h6>{item.title}</h6>
                  <div className="d-flex gap-2">
                    <p className="fw-bold">{item?.owner?.username}</p>
                    <p>{getDatePart(item.created_at)}</p>
                  </div>
                  <p>{item.content}...</p>
                </div>
              </Select.Option>
            ))}
          </Select>

          <div className="me-5 nav-item dropdown">
            <button
              // role="button"
              data-bs-toggle="dropdown"
              className="nav-link dropdown-toggle"
            >
              User
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

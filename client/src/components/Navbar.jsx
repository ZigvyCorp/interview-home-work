import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import AvatarUser from "./AvatarUser";
import { Container, Form, Nav } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../features/posts/actions";
import { setSearchItem } from "../features/searchItem/actions";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { data: posts } = useSelector((state) => state.post) ?? [];
  useEffect(() => {
    dispatch(fetchPostRequest("posts"));
  }, [dispatch]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setTimeout(() => {
      const searchItem = posts?.filter((post) =>
        post.title?.toLowerCase().includes(searchTerm)
      );
      dispatch(setSearchItem(searchItem));
    }, 200);
  };
  return (
    <Container className="container-fluid mw-100 px-5 w-100 d-flex justify-content-between align-content-center text-white custom-bg-dark">
      <Nav>
        <Nav.Link href="/">
          <Logo />
        </Nav.Link>
      </Nav>
      <Nav
        className="d-flex align-content-center justify-content-center d-none d-lg-flex"
        style={{ marginLeft: "170px" }}
      >
        <Nav.Link href="/" className="fs-4 text-white">
          Blogs
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto d-flex justify-content-center align-items-center d-none d-md-flex">
        <Form.Group className="position-relative">
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              borderRadius: "10px",
              paddingLeft: "35px",
              maxWidth: "200px",
            }}
            className="custom-bg-dark border-2 btn-outline-none text-white"
          />
          <i
            className="bi bi-search"
            style={{
              position: "absolute",
              top: "10px",
              left: "14px",
              zIndex: "10",
            }}
          ></i>
        </Form.Group>
        <Nav.Link
          href="/"
          className="d-flex align-content-center justify-content-center"
        >
          <AvatarUser />
        </Nav.Link>
      </Nav>
    </Container>
  );
};

export default Navbar;

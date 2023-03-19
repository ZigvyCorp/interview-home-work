import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
  selectUsername,
} from "./redux/useSlice.js";

function TopBar() {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ fontSize: "30px" }}>
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" style={{ fontSize: "30px" }}>
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            {isSignedIn && username ? (
              <Nav.Link href="/" style={{ fontSize: "30px" }}>
                {username.name}
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" style={{ fontSize: "30px" }}>
                <FaUserCircle /> Account
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;

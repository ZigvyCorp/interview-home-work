import { ROUTES_PATH } from "@/common/enum/routes.enum";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand>
          <Link to={ROUTES_PATH.HOME}>
            <img src="/zigvy-logo.webp" alt="" width={60} height={60} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
          <Link to={ROUTES_PATH.HOME}>Danh sách bài viết</Link>
        </Navbar.Text>

        <Navbar.Collapse className="justify-content-end">
          <Button>Đăng nhập</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

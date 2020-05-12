import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fragment } from "react";
import Button from "react-bootstrap/Button";

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`;

export default ({ user }) => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New
    </Link>
  </NavigationBar>
);

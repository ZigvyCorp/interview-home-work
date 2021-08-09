import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

const Header = () => {
  return (
    <Container>
      <div className={classes.Header}>
        <div className={classes.LogoIcon}></div>
        <div className={classes.LogoName}>Logo</div>
        <div className={classes.Home}>
          <NavLink
            className={classes.Nav}
            to="/"
            exact
            activeClassName={classes.home}
          >
            Blogs
          </NavLink>
        </div>
        <div className={classes.User}>
          <div className={classes.Ava}>
            <PersonIcon className={classes.PersonIcon} />
          </div>
          <div className={classes.Name}>Adam Levine</div>
        </div>
      </div>
    </Container>
  );
};

export default Header;

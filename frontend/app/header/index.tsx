import React from "react";

import classes from "./header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className={classes.header}>
      <div className={classes.headerLogo}>
        <div />
        <div>Logo</div>
      </div>
      <div>Blogs</div>
      <div className={classes.headerUser}>Adam Levine</div>
    </nav>
  );
};

export default Header;

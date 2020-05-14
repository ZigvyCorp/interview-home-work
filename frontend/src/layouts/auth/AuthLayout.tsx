import React from "react";
import classes from "./auth-layout.module.scss";

export const AuthLayout: React.FC = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

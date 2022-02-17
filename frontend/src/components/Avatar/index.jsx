import React from "react";
import "./style.scss";

function Avatar({ name = "" }) {
  return (
    <img
      className="avatar"
      src={`https://ui-avatars.com/api/?name=${name}&background=random`}
      alt=""
    />
  );
}

export default Avatar;

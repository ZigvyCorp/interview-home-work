import React from "react";
import moment from "moment";
import "./Avatar.css";
const Avatar = ({ item, srcImage, username }) => {
  return (
    <div className="avatar">
      <img
        src={srcImage ?? "https://source.unsplash.com/collection/happy-people"}
        alt="avatar"
        className="avatar-images"
        style={{ width: 38, height: 38, objectFit: "cover" }}
      />

      <div className="author-des-post">
        <p className="author-name">{username}</p>
        <span className="post-createat">
          {item && moment(item).format(" MMMM Do YYYY")}
        </span>
      </div>
    </div>
  );
};

export default Avatar;

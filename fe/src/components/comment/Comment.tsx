import React from "react";
import { Image } from "../index";

import avatar from "../../assets/avatar-default.jpg";
import "./style.scss";

interface Props {
  content: string;
  owner: User;
}

interface User {
  name: string;
}

const Comment = (props: Props) => {
  return (
    <div className="d-flex comment">
      <div className="comment-img">
        <Image src={avatar} alt="avatar" height={30}></Image>
      </div>

      <div>
        <p>
          {props.owner.name} <i>1 day ago</i>
        </p>
        <p>{props.content}</p>
        <a href="">Reply to</a>
      </div>
    </div>
  );
};

export default Comment;

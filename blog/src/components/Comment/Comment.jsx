import { Avatar } from "antd";
import React from "react";
import avatarImg from "../../assets/avatar.png";

import "./Comment.scss";
const Comments = ({ comment }) => {
    return (
        <div className="comment">
            <Avatar src={avatarImg} size={50} />
            <div className="right">
                <div className="name">
                    <span style={{ color: "black", fontWeight: "600" }}>
                        {comment?.name}
                    </span>
                    <span className="timestamp">a day ago</span>
                </div>
                <p>{comment?.body}</p>
                <span className="btn-reply">Reply to</span>
            </div>
        </div>
    );
};

export default Comments;

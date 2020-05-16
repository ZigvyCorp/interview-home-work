import { Post } from "@/models/post";
import { User } from "@/models/user";
import { Tag, Typography } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export const PostContent: React.FC<{ post: Post }> = (props) => {
  return (
    <div>
      <Typography.Paragraph>{props.post.content}</Typography.Paragraph>
      <small>
        Created by{" "}
        <Link to={`/profile/${(props.post.author as User)?._id}`}>
          {(props.post.author as User)?.firstName}{" "}
          {(props.post.author as User)?.lastName}
        </Link>{" "}
        at {moment(props.post.createdAt).format("MMM Do, YYYY HH:mm")}
      </small>
      <p style={{ marginTop: "8px" }}>
        {props.post.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Tag color="#55acee">#{tag}</Tag>
            &nbsp;
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

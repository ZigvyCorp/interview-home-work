import React from "react";
import { BoxColor, Collapse, TruncateText } from "../index";
import Comment from "../comment/Comment";

import "./style.scss";
import { Link } from "react-router-dom";

type User = {
  name: string;
};

type Comment = {
  content: string;
  owner: User;
};

type Post = {
  _id: number;
  createdAt: Date;
  owner: number;
  tags: Array<string>;
  title: string;
  content: string;
  comments: Array<Comment>;
};

interface Props {
  data: Array<Post>;
}

const Post = (props: Props) => {
  return (
    <div>
      {props.data.map((post) => (
        <div key={post._id} className="post">
          <Link to={`detail/${post._id}`} className="post-container">
            <div className="post-header">
              <div className="post-header-content">
                <h4 className="post-header-content-title">{post.title}</h4>
                <i className="post-header-content-date">Sep 20, 2018</i>
              </div>

              <div>
                {post.tags.map((tag) => (
                  <BoxColor text={tag}></BoxColor>
                ))}
              </div>
            </div>
            <i className="post-header-author">Author: John Smith</i>
            <div className="post-content">
              <TruncateText maxWords={80} text={post.content}></TruncateText>
            </div>
          </Link>
          <Collapse id={post._id} text={`Comments (${post.comments.length})`}>
            {post.comments.map((comment) => (
              <Comment content={comment.content} owner={comment.owner} />
            ))}
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Post;

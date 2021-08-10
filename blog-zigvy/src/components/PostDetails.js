import { Collapse } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";

const { Panel } = Collapse;

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((x) => x.id === parseInt(id))
  );
  console.log(post);
  const comments = useSelector((state) =>
    state.comments.comments.filter((x) => x.postId === parseInt(id))
  );
  console.log(comments);

  return (
    <>
      <div key={post.id} className="post">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-info">
          <div className="post-info-author-date">
            <h4 className="author">
              Author:{" "}
              <span>{post.id % 2 === 0 ? "John Smith" : "Adam Levine"}</span>
            </h4>
            <h4 className="date">Created at: Sep 20, 2018</h4>
          </div>
          <div className="post-info-tags">
            <div style={{ color: "magenta" }} className="tag">
              magenta
            </div>
            <div style={{ color: "red" }} className="tag">
              red
            </div>
            <div style={{ color: "#E96B42" }} className="tag">
              volcano
            </div>
            <div style={{ color: "orange" }} className="tag">
              orange
            </div>
            <div style={{ color: "gold" }} className="tag">
              gold
            </div>
            <div style={{ color: "lime" }} className="tag">
              lime
            </div>
            <div style={{ color: "green" }} className="tag">
              green
            </div>
            <div style={{ color: "cyan" }} className="tag">
              cyan
            </div>
            <div style={{ color: "blue" }} className="tag">
              blue
            </div>
            <div style={{ color: "#6A85EB" }} className="tag">
              geekblue
            </div>
            <div style={{ color: "purple" }} className="tag">
              purple
            </div>
          </div>
        </div>
        <div className="post-description">{post.body}</div>
        <Collapse ghost>
          <Panel header={` ${comments.length} replies`}>
            {comments.map((comment) => (
              <Comments cmt={comment} />
            ))}
          </Panel>
        </Collapse>

        <div className="back">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

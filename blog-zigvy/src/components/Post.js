import React from "react";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "../redux/actions";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Post = ({ post }) => {
  const dispatch = useDispatch();
  //comments
  const comments = useSelector((state) =>
    state.comments.comments.filter((x) => x.postId === post.id)
  );
  console.log(comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <>
      <div key={post.id} className="post">
        <h1 className="post-title">
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h1>
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
      </div>
      {/* end post */}
    </>
  );
};

export default Post;

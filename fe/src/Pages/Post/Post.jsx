import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import './Post.css'
const Post = ({ ...post }) => {
  const [showComments, setShowComments] = useState(false);
  const create_Date = new Date(post.created_at);

  return (
    <>
      <h2 className="title">{post.title}</h2>
     
        <Row className="title-body">
          <Col span={12} className="title-user">
            <h4>{post.user?.name || "meowmeow"}</h4>
            <h4>{create_Date.toLocaleString()}</h4>
          </Col>
          <Col span={12} className="tag">
            {post.tags?.map((tag, index) => (
              <p key={index}>
                {tag}
              </p>
            ))}
          </Col>
        </Row>
     
      <Row span={24} className="content">
        <Link to={`/post/${post.id}`}>
        <p>{post.content.slice(0, 100)}</p>
         </Link>
      </Row>
      <Row span={24}>
        <div  onClick={() => setShowComments(!showComments)}>
            <span>{post.comments?.length || 0} Comments</span>
        </div>
        {showComments && (
          <div>
            {post.comments?.length > 0 ? (
              <ul>
                {post.comments.map((comment, index) => (
                  <li key={index}>
                    <div>
                      {comment.user?.name || "meowmeow"}
                    </div>
                    <div>
                      {comment.content}
                    </div>
                  </li>
                ))}
              </ul>
            ) : ('')}
          </div>
        )}
      </Row>
    </>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetAllCommentsRequest, GetAllUsersRequest } from "../../Redux/actions";
import { Col, Row } from "antd";
import './PostDetail.css'
const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    dispatch(GetAllCommentsRequest());
    dispatch(GetAllUsersRequest());
  }, [dispatch]);
 const create_Date = new Date(post.created_at);
  const post = posts.find((p) => p.id === parseInt(postId, 10));
  const postComments = comments.filter((comment) => comment.post === post?.id);
  const postUser = users.find((user) => user.id === post?.owner);
  return (
    <>
      <div className="detail-container">
        <h2 className="detail-title">{post.title}</h2>
        <Row>
          <Col span={12} className="detail-name">
            <div> {postUser?.name || "meowmeow"}</div>
            <div> {create_Date.toLocaleString()}</div>
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
          <p>{post.content}</p>
        </Row>
        <Row span={24}>
          <div onClick={() => setShowComments(!showComments)}>
            <span>{postComments?.length || 0} Comments</span>
          </div>
          {showComments && (
            <div>
              {postComments?.length > 0 ? (
                <ul>
                  {postComments.map((comment, index) => (
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
      </div>
    </>

  );
};

export default PostDetail;

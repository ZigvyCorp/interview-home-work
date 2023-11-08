import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCommentsRequest, fetchUsersRequest } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const post = posts.find((p) => p.id === parseInt(postId, 10));
  const postComments = comments.filter((comment) => comment.post === post?.id);
  const postUser = users.find((user) => user.id === post?.owner);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="col-md-8 mx-auto">
        <div className="post card mt-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="card-author text-start">
                  {postUser?.name || "Anonymous"}
                </h4>
                <p className="card-text text-muted">
                  {new Date(post.created_at).toLocaleString()}
                </p>
              </div>
              <div className="tags text-end">
                <strong>Tags:</strong>{" "}
                {post.tags?.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2>{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <div className="comments text-start">
              <h5>Comments:</h5>
              {postComments?.length > 0 ? (
                <ul className="list-group">
                  {postComments.map((comment, index) => {
                    const commentUser = users.find(
                      (user) => user.id === comment.owner
                    );
                    return (
                      <li key={index} className="list-group-item">
                        <p>
                          <strong>{commentUser?.name || "Anonymous"}:</strong>{" "}
                          {comment.content}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

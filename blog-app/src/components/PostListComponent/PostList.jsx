import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../../redux/postsSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PostList.module.scss"; // Import file SCSS module

const PostList = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading)
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      {list.map((post) => (
        <div
          key={post._id}
          className={`${styles.postCard} card mb-4 shadow-sm`}
        >
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">
              <strong>Tags:</strong>{" "}
              <span className={`badge bg-primary`}>
                {post.tags.map((tag, index) => (
                  <span key={index}>
                    {tag}
                    {index < post.tags.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </p>
            <p className="card-text">
              <strong>Người đăng:</strong> {post.owner.name}
            </p>
            <p className="card-text">
              <strong>Ngày đăng:</strong>{" "}
              <span className="text-muted">
                {new Date(post.created_at).toLocaleDateString()}
              </span>
            </p>
            <p className="card-text">{post.content}</p>
          </div>
          <div className="card-footer">
            <h6>Bình luận:</h6>
            {post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <div
                  key={comment._id}
                  className={`mb-2 border-top pt-2 ${styles.comment}`}
                >
                  <strong>{comment.owner.name || "Nam"}</strong>{" "}
                  <p>{comment.content}</p>
                  <small className="text-muted">
                    Ngày bình luận:{" "}
                    {new Date(comment.created_at).toLocaleDateString()}
                  </small>
                </div>
              ))
            ) : (
              <p className="text-muted">Chưa có bình luận nào.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

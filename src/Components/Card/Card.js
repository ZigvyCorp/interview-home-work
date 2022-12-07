import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCommentFetch } from "../../redux/actions/commentAction";
import { getUserFetch } from "../../redux/actions/userAction";
import { hideLongDesc } from "../../utils/HideLongDecs";
import { createdDate } from "../../utils/RandomNum";

function Card({ postId, userId, item }) {
  const comments = useSelector((state) => state.commentReducer.comments);
  const users = useSelector((state) => state.userReducer.users);
  const author = users.find((item) => item.id === Number(userId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentFetch(postId));
    dispatch(getUserFetch(users));
  }, []);

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200/200?random=1"
        alt="blog"
        loading="lazy"
      />
      <div className="card-body">
        <p title={item.title} className="card-title text-truncate h4 mb-0">
          {item.title}
        </p>
        <p style={{ fontSize: "14px" }} className="text-muted mb-0">
          {createdDate.toDateString()}
        </p>
        <div
          style={{ fontSize: "14px", color: "blueviolet" }}
          className="d-flex"
        >
          <p className="mr-3">
            <i className="fa-regular fa-user mr-1"></i> {author?.name}
          </p>
          <p>
            <i className="fa-regular fa-message mr-1"></i>
            {comments.length}
          </p>
        </div>
        <p
          style={{
            height: "90px",
          }}
          className="card-text text-muted"
        >
          {hideLongDesc(item.body, 100)}
        </p>
        <Link to={`/detail/${item.id}`}>
          <button className="btn btn-dark w-100">Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

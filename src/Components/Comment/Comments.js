import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getCommentFetch } from "../../redux/actions/commentAction";

function Comment({ postId }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const comments = useSelector((state) => state.commentReducer.comments);
  const dispatch = useDispatch();
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    dispatch(getCommentFetch(postId));
  }, []);

  const onRenderComment = () => {
    return comments.map((item, index) => {
      return (
        <li key={index} className="list-group-item">
          <div className="d-flex ">
            <img
              src="https://i.pravatar.cc/300"
              className="rounded-circle img-fluid mx-2"
              style={{ width: "50px", height: "50px" }}
              alt="Avatar"
            />
            <div>
              <div>
                <p className="mb-0 font-weight-bold text-dark">{item.name} </p>
                <p className="text-muted mb-0">{item.email}</p>
                <p
                  style={{ fontSize: "14px" }}
                  className="text-muted font-italic font-weight-normal"
                >
                  {randomNum} day(s) ago
                </p>
              </div>
              <p>{item.body}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  const handleOpenCommentBox = () => {
    setOpenCommentBox(!openCommentBox);
  };

  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <button
          onClick={() => {
            handleOpenCommentBox();
          }}
          className="btn btn-dark"
        >
          {`${comments.length}`} replies
        </button>
        <ul className="list-group list-group-flush">
          {openCommentBox && onRenderComment()}
        </ul>
      </div>
    </div>
  );
}

export default Comment;

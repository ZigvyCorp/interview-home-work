import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentDetailActions } from "../../redux/actions/commentActions";
import { postDetailAction } from "../../redux/actions/postActions";
import { userActions } from "../../redux/actions/userActions";
import "./Detail.css";

const Details = (props) => {
  const { postDetail } = useSelector((state) => state.postReducer);
  const { commentDetail } = useSelector((state) => state.commentsReducer);
  const { userStore } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  let { id } = props.match.params;
  useEffect(() => {
    dispatch(postDetailAction(id));
    dispatch(commentDetailActions(id));
    dispatch(userActions());
  }, [dispatch, id]);

  return (
    <>
      <div className="container  post__detail">
        <div className="post__detail__info">
          <h2 className="post__detail__info__title">{postDetail.title}</h2>
          <div className="post__info__details d-flex justify-content-between mt-4 mb-3">
            {userStore?.map((user, index) => {
              return (
                <Fragment key={index}>
                  {user.id === postDetail.userId ? (
                    <div className="post__info__details__author">
                      <p className="mb-0">
                        Author: <span>{user.name}</span>
                      </p>

                      <p className="mb-0">
                        Email: <span>{user.email}</span>
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              );
            })}

            <div className="post__info__details__tag__color"></div>
          </div>

          <p className="post__info__content mb-4">{postDetail.body}</p>

          <div className="post__info__comments">
            <p
              className="mb-0"
              data-toggle="collapse"
              data-target="#post"
              aria-expanded="false"
              aria-controls="post"
              style={{ cursor: "pointer", display: "inline-block" }}
            >
              5<span className="ml-1">replies</span>
            </p>

            <hr className="mt-1" />

            <div className="collapse" id="post">
              {commentDetail?.map((comment, index) => {
                return (
                  <div key={index} className="d-flex mb-3">
                    <p className="mb-0 mr-3">
                      <img src="https://i.pravatar.cc/50" width={50} alt="" />
                    </p>
                    <div>
                      <p className="mb-0 comment__owner">
                        {comment.name}
                        <span>a day ago</span>
                      </p>

                      <p className="mb-0 comment__conetent">{comment.body}</p>

                      <button
                        className="btn p-0 comment__reply mb-1"
                        data-toggle="collapse"
                        data-target={`#comment${comment.id}`}
                        aria-expanded="false"
                        aria-controls={`comment${comment.id}`}
                      >
                        Reply to
                      </button>
                      <form
                        className="collapse"
                        id={`comment${comment.id}`}
                        // onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            name="content"
                            className="form-control"
                            placeholder="Write a public reply..."
                            // onChange={handleComment}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

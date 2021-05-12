import React, { Fragment, useEffect, useState } from "react";
import "./Post.css";
import { postActions } from "../../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addCommentAction,
  commentsActions,
} from "../../redux/actions/commentActions";
import { userActions } from "../../redux/actions/userActions";

const Post = () => {
  const dispatch = useDispatch();
  const { postStore, postSearch } = useSelector((state) => state.postReducer);
  const { userStore } = useSelector((state) => state.userReducer);
  const { commentsStore } = useSelector((state) => state.commentsReducer);
  const [comment, setComment] = useState({
    content: "",
  });

  const handleComment = (e) => {
    let { name, value } = e.target;

    setComment({
      ...comment,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCommentAction(comment));
  };

  useEffect(() => {
    dispatch(postActions());
    dispatch(commentsActions());
    dispatch(userActions());
  }, [dispatch]);

  return (
    <>
      {postStore
        ?.filter((value) =>
          value.title.toLowerCase().includes(postSearch.toLowerCase())
        )
        ?.map((post, index) => {
          return (
            <div key={index} className="post__info">
              <NavLink
                to={`/detail/${post.id}`}
                className="post__info__title text-center text-dark"
              >
                {post.title}
              </NavLink>

              <div className="post__info__details d-flex justify-content-between mt-4 mb-5">
                {userStore?.map((user, index) => {
                  return (
                    <Fragment key={index}>
                      {post.userId === user.id ? (
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

              <p className="post__info__content mb-4">
                {post.body.length > 100
                  ? post.body.substring(0, 100) + "..."
                  : post.body}
              </p>

              <div className="post__info__comments">
                <p
                  className="mb-0"
                  data-toggle="collapse"
                  data-target={`#post${post.id}`}
                  aria-expanded="false"
                  aria-controls={`post${post.id}`}
                  style={{ cursor: "pointer", display: "inline-block" }}
                >
                  5<span className="ml-1">replies</span>
                </p>

                <hr className="mt-1" />

                <div className="collapse" id={`post${post.id}`}>
                  {commentsStore?.map((comment, index) => {
                    return (
                      <Fragment key={index}>
                        {post.userId === comment.postId ? (
                          <div className="d-flex mb-3">
                            <p className="mb-0 mr-3">
                              <img
                                src="https://i.pravatar.cc/50"
                                width={50}
                                alt=""
                              />
                            </p>
                            <div>
                              <p className="mb-0 comment__owner">
                                {comment.name}
                                <span>a day ago</span>
                              </p>

                              <p className="mb-0 comment__conetent">
                                {comment.body}
                              </p>

                              <button
                                className="btn p-0 comment__reply mb-1"
                                data-toggle="collapse"
                                data-target={`#postreply${comment.id}`}
                                aria-expanded="false"
                                aria-controls={`postreply${comment.id}`}
                              >
                                Reply to
                              </button>
                              <form
                                className="collapse"
                                id={`postreply${comment.id}`}
                                onSubmit={handleSubmit}
                              >
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="content"
                                    className="form-control"
                                    placeholder="Write a public reply..."
                                    onChange={handleComment}
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Post;

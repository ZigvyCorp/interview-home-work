import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComment, commentSelector } from "../store/reducers/commentSlice";
import { getAllUser, userSelector } from "../store/reducers/userSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moment from "moment";
const Post = ({ title, body, id, userId }) => {
  const commentAll = useSelector(commentSelector);
  const Users = useSelector(userSelector);
  const comments = commentAll.filter((comment) => {
    return comment.postId == id;
  });
  const users = Users.find((user) => {
    return user.id == userId;
  });

  return (
    <div className="col-sm-6 col-12 post-custom">
      <div className="card">
        <div className="card-body">
          <Link to={`detail/${id}`}>
            <h5 className="card-title post-title-modify">{title}</h5>
          </Link>

          <div className="infor-post">
            <p>author : {users && users.name}</p>
            <p>Creat At : {moment(new Date()).format("YYYY/MM/DD")}</p>
          </div>
          <p className="card-text">{body}</p>
          <p className="wrap-comment">
            <a
              className="btn btn-primary button-modify"
              data-bs-toggle="collapse"
              href={`#b${id}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {comments.length} Comment
            </a>
          </p>
          <div className="collapse colap-modify" id={`b${id}`}>
            {comments.map((comment) => (
              <>
                <div className="card card-body wrap-card-body">
                  <div className="card-body-custom">
                    <div className="content-comment">
                      <ion-icon name="person-circle-outline"></ion-icon>
                      <h5>{comment.name}</h5>
                    </div>
                    <p>{comment.body}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// ANT DESIGN UI
import { Comment, List, Collapse, Row, Divider, Avatar, Input } from "antd";

// ACTION
import { getPosts } from "../redux/action/posts";
import { getUsers } from "../redux/action/users";
import { getComments } from "../redux/action/comments";

function PostDetail(props) {
  const { id } = useParams();
  //   const [post, setPost] = useState({});

  const dispatch = useDispatch();

  // POST
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const post = posts.find((post) => post.id === parseInt(id));

  // USER
  const users = useSelector((state) => state.users.users);

  // COMMENT
  const comments = useSelector((state) => state.comments.comments);
  const loadingComments = useSelector((state) => state.comments.loading);

  // DISPATCH
  useEffect(() => {
    dispatch(getUsers());

    dispatch(getPosts());

    dispatch(getComments());

    // setPost(posts.find((post) => post.id === parseInt(id)));
  }, []);

  // FAKE DATE
  function randomDate(start, end) {
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    let day = randomDate.getUTCDate();
    let month = randomDate.getUTCMonth() + 1;
    let year = randomDate.getUTCFullYear();
    let newdate = day + " / " + month + " / " + year;
    return newdate;
  }

  // ACTION COMMENTS
  const actionComment = [<span key="comment-basic-reply-to">Reply to</span>];

  if (posts.length == 0) {
    return (
      <div className="page">
        <h2>Loading....</h2>
      </div>
    );
  }
  return (
    <div className="page">
      <div className="container">
        <h2 className="post__title">
          {posts.length > 0 && post.title}
          {/* {posts.length > 0 &&
          posts.find((post) => post.id === parseInt(id)).title} */}
        </h2>
        <Row>
          <span className="post__label">Author : </span>
          <a href="#" className="post__author post__link">
            {users.length > 0 &&
              posts.length > 0 &&
              users[post.userId - 1].name}
          </a>
        </Row>
        <Row>
          <span className="post__label">Create at : </span>
          <a href="#" className="post__date post__link">
            {randomDate(new Date(2012, 0, 1), new Date())}
          </a>
        </Row>
        <Row>
          <p className="post__content">{posts.length > 0 && post.body}</p>
        </Row>
        <Row>
          {comments.length > 0 && (
            <List
              header={`${
                comments.filter((cmt) => cmt.postId === parseInt(id)).length
              } replies`}
              className="comment-list"
              itemLayout="horizontal"
              loading={loadingComments}
              dataSource={comments.filter((cmt) => cmt.postId === parseInt(id))}
              renderItem={(item) => (
                <li>
                  <Comment
                    actions={actionComment}
                    avatar={
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                      />
                    }
                    author={item.email}
                    content={item.body}
                    datetime={randomDate(new Date(2012, 0, 1), new Date())}
                  />
                  <Divider />
                </li>
              )}
            />
          )}
        </Row>
      </div>
    </div>
  );
}

export default PostDetail;

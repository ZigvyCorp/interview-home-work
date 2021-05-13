import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

// ACTION
import { getPosts } from "../redux/action/posts";
import { getUsers } from "../redux/action/users";
import { getComments } from "../redux/action/comments";

// ANT DESIGN UI
import { Comment, List, Collapse, Row, Divider, Avatar, Input } from "antd";

function PostList() {
  const dispatch = useDispatch();
  // POST
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  // USER
  const users = useSelector((state) => state.users.users);

  // COMMENT
  const comments = useSelector((state) => state.comments.comments);
  const loadingComments = useSelector((state) => state.comments.loading);

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

  // LIMIT POST CONTENT
  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  // ACTION COMMENTS
  const actionComment = [<span key="comment-basic-reply-to">Reply to</span>];

  // ON SEARCH
  const { Search } = Input;

  const onSearch = (value) => {
    console.log(value);
  };

  // DISPATCH
  useEffect(() => {
    dispatch(getUsers());

    dispatch(getPosts());

    dispatch(getComments());
  }, []);

  return (
    <section className="postlist">
      <div className="container">
        <Row>
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{ width: 200, margin: "0 auto 2rem" }}
          />
        </Row>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 5,
          }}
          loading={loading}
          dataSource={posts}
          renderItem={(item) => (
            <List.Item key={item.id} className="post__item">
              <List.Item.Meta
                title={
                  <Link to={`/posts/${item.id}`} className="post__title">
                    {item.title}
                  </Link>
                }
              />
              <Row>
                <span className="post__label">Author : </span>
                <a href="#" className="post__author post__link">
                  {users.length > 0 && users[item.userId - 1].name}
                </a>
              </Row>
              <Row>
                <span className="post__label">Create at : </span>
                <a href="#" className="post__date post__link">
                  {randomDate(new Date(2012, 0, 1), new Date())}
                </a>
              </Row>
              <Row>
                {/* limit only display 100 words*/}
                <p className="post__content">{truncate(item.body, 100)}</p>
              </Row>

              {/* COMMENTS */}
              <Collapse>
                <Collapse.Panel
                  header={`${
                    comments.filter((cmt) => cmt.postId === item.id).length
                  } replies`}
                >
                  <List
                    className="comment-list"
                    itemLayout="horizontal"
                    loading={loadingComments}
                    dataSource={comments.filter(
                      (cmt) => cmt.postId === item.id
                    )}
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
                          datetime={randomDate(
                            new Date(2012, 0, 1),
                            new Date()
                          )}
                        />
                        <Divider />
                      </li>
                    )}
                  />
                </Collapse.Panel>
              </Collapse>
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}

export default PostList;

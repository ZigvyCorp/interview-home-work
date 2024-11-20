import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import { Card, Space, Collapse } from "antd";
import { userServ } from "../services/userService";

const PostList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userServ
      .getAllUser()
      .then((result) => {
        console.log(result.data.content);
        setUsers(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(users);
  const [post, setPost] = useState([]);

  useEffect(() => {
    userServ
      .getAllPost()
      .then((result) => {
        console.log(result.data.content);
        setPost(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(post);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    userServ
      .getAllComment()
      .then((result) => {
        console.log(result.data.content);
        setComment(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(comment);

  const usersById = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  const postsWithUser = post.map((post) => ({
    ...post,
    user: usersById[post.userId],
    comments: [],
  }));

  comment.forEach((comment) => {
    if (postsWithUser[comment.postId - 1]) {
      postsWithUser[comment.postId - 1].comments.push(comment);
    }
  });

  console.log(postsWithUser);
  const newArr = postsWithUser;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5">
        <h1 className="text-xl text-center py-4">Post List</h1>
        <div className="grid grid-cols-1">
          {newArr.map((item, index) => {
            return (
              <div className="items-center" key={index}>
                <Space direction="vertical" size={16} className="w-full items-center">
                  <Card
                    title={item.title}
                    extra={
                      <a href="#">More...</a>
                    }
                    style={{
                      width: 1100,
                    }}
                  >
                    <div className="flex flex-row py-4">
                      <div className="basis-1/2">
                        <h2>Author: {item.user.name}</h2>
                        <h2>Create At: {item.user.city}</h2>
                      </div>
                      <div className="basis-1/2 text-right">
                        <span>
                          <Rate allowHalf defaultValue={4} />
                        </span>
                      </div>
                    </div>
                    <p className="">{item.body}</p>
                    {item.comments.map((item, index) => {
                      return (
                        <div className="py-4" key={index}>
                          <Space direction="vertical">
                            <Collapse
                              collapsible="header"
                              defaultActiveKey={["0"]}
                              items={[
                                {
                                  key: `${item.id}`,
                                  label: `${item.name}`,
                                  children: (
                                    <div>
                                      <p>{item.email}</p>
                                      <p>{item.body}</p>
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </Space>
                        </div>
                      );
                    })}
                  </Card>
                </Space>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostList;

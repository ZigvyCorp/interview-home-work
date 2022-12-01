import React, { useEffect, useState } from "react";
import { Button, Text, Avatar } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Comments from "../Comments/Comments";
import Users from "../Users/Users";

const PostCart = () => {
  const dispatch = useDispatch();


  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const newData = data?.map((dataX) => {
        dataX.isOpen = true;
        return dataX;
      });
      dispatch({ type: "add", posts: newData });
    } catch (error) {
      console.log(error);
    }
  };


  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch({ type: "detailComment", comments: data });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "detailUsers", users: data });
    } catch (error) {
      console.log(error);
    }
  };


  const { posts, users } = useSelector((state) => {
    return { posts: state.posts, users: state.users };
  });
 
  console.log(posts);
    console.log(users);
  useEffect(() => {
    fetchPosts();
    fetchComments();
    fetchUsers()
  }, []);
  return (
    <>
      {posts?.map((post, index) => {
        return (
          <div key={index} className="border-dark border-bottom border-4">
            <div className="text-center py-5">
              <h1>{post.title}</h1>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div className="ps-4">
                  <h3><Users id={post.userId}/></h3>
                  <h3>Creat at: Sep 20, 2018</h3>
                </div>
              </div>
              <div style={{ maxWidth: "330px" }}>
                <Button
                  variant="light"
                  color="pink"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  magenta
                </Button>
                <Button
                  variant="light"
                  color="red"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  red
                </Button>
                <Button
                  variant="light"
                  color="orange"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  orange
                </Button>
                <Button
                  variant="light"
                  color="yellow"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  gold
                </Button>
                <Button
                  variant="light"
                  color="lime"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  lime
                </Button>
                <Button
                  variant="light"
                  color="teal"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  teal
                </Button>
                <Button
                  variant="light"
                  color="green"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  green
                </Button>
                <Button
                  variant="light"
                  color="cyan"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  cyan
                </Button>
                <Button
                  variant="light"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  blue
                </Button>
                <Button
                  variant="light"
                  color="indigo"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  geekblue
                </Button>
                <Button
                  variant="light"
                  color="violet"
                  radius="md"
                  size="xs"
                  className="me-2 mb-2"
                >
                  purple
                </Button>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="px-4">{post.body}</h3>
            </div>
            <div className="d-flex ps-4">
              <Text fz="xl">2 Replies</Text>
              <Button
                variant="subtle"
                color="red"
                size="lg"
                compact
              >
                (Detail)
              </Button>
            </div>
            <div className="px-4 pb-4">
              <hr />
                <Comments id={post.id} />

            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCart;

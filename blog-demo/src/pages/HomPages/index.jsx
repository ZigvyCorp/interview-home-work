import React from "react";
import { Redirect } from "react-router";
import PostList from "../../components/PostList";

const Home = () => {
  const useKey = localStorage.getItem("user");

  if (!useKey) {
    <Redirect to="/login" />;
  }

  return (
    <>
      <PostList />
    </>
  );
};

export default Home;

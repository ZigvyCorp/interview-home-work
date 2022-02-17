import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import fetchPosts from "../../api/fetchPosts";
import fetchUsersByIds from "../../api/fetchUsers";
import NavBar from "../../components/NavBar";
import PostItem from "../../components/PostItem";

function Home() {
  const [postList, setPostList] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchPosts().then((json) => setPostList(json));
    // setPostList(posts);
    // return () => {
    //   second;
    // };
  }, []);

  console.log("post", postList);

  return (
    <>
      <NavBar />
      <article className="margin-nav">
        {postList?.map((postData, index) => (
          <PostItem data={postData} />
        ))}
      </article>
    </>
  );
}

export default Home;

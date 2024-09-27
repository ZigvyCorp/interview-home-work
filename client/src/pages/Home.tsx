import React, { useEffect } from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state: { posts: Post[] }) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "POST_FETCH_REQUESTED", payload: { pageIndex: 0 } });
  });
  return (
    <div>
      <Header />
      {posts.map((post) => (
        <Post
          post={post}
          comments={[
            {
              id: 1,
              owner: 1,
              post: 1,
              content: "Boring!!!",
              createdAt: new Date(1576506719083),
            },
            {
              id: 2,
              owner: 3,
              post: 1,
              content: "Very good. But very bad also",
              createdAt: new Date(1576506719083),
            },
          ]}
        />
      ))}
      <Pagination />
    </div>
  );
};

export default Home;

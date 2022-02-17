import React, { useEffect, useState } from "react";
import fetchPosts from "../../api/fetchPosts";
import NavBar from "../../components/NavBar";
import PostItem from "../../components/PostItem";

function Home() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetchPosts().then((json) => setPostList(json));
  }, []);

  console.log("data", postList);

  return (
    <>
      <NavBar />
      <article className="margin-nav">
        {postList?.posts?.map((postData, index) => (
          <PostItem
            data={postData}
            authors={postList.users}
            comments={postList.comments}
          />
        ))}
      </article>
    </>
  );
}

export default Home;

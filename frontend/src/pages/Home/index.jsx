import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchPosts from "../../api/fetchPosts";
import NavBar from "../../components/NavBar";
import PostItem from "../../components/PostItem";
import { persistData } from "../../features/Post/postSlice";

function Home() {
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts().then((json) => setPostList(json));
  }, []);

  //save all posts to localStorage
  localStorage.setItem("postList", JSON.stringify(postList));

  //use redux to save data
  const action = persistData(postList);
  console.log(action);
  dispatch(action);

  console.log("data", postList);

  return (
    <>
      <NavBar />

      <article className="margin-nav">
        {postList?.posts?.map((postData, index) => (
          <PostItem
            key={postData.id}
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

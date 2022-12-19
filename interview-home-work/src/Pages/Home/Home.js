import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import Post from "../../Components/Post/Post";
import { GET_LIST_POSTS } from "../../Redux/Constant/Constant";

export default function Home() {
  let { posts } = useSelector(state => state.PostsReducer)
  console.log("posts", posts[0])
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch({type: GET_LIST_POSTS})
  }, [])
  return <div className="container">
    <Header />
    <Post />
  </div>
}

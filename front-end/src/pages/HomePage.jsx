import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { POSTS } from "../mock-data";

export default function HomePage() {
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.posts);

  // useEffect(() => {
  //   dispatch(getAllPosts());
  // }, [dispatch]);

  return (
    <div className="d-flex flex-column gap-3">
      {POSTS.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

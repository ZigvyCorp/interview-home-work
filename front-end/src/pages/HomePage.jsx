import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="container fluid">
      <p className="text-primary fs-2 fw-bold">Test Bootstrap</p>
      <p>Saga Test: First post title is {posts[0]?.title || ""}</p>
      <PostCard />
      <Link to={`/posts/${2}`}>To Detail page - Post 2</Link>
    </div>
  );
}

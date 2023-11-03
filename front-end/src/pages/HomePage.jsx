import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import PostCard from "../components/PostCard";
import Header from "../components/Header";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="mb-5">
      <Header title="Posts" />

      <div className="search-bar container py-2 mb-3">
        <form action="" className="w-100 text-center">
          <input type="text" placeholder="Find post" className="w-50" />
        </form>
      </div>

      <div className="d-flex flex-column gap-3">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

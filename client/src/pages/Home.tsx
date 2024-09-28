import { useEffect } from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import { Pagination } from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/action/postAction";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const posts = useSelector((state: { posts: Post[] }) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(1));
  }, []);

  return (
    <div>
      <Header />
      <SearchBar />
      {posts &&
        posts?.map((post) => (
          <Post
            key={post.id}
            post={post}
            comments={post?.comments}
          />
        ))}
      <Pagination />
    </div>
  );
};

export default Home;

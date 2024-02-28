import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { clearPostStore, fetchPostsStart } from "../redux/slices/postSlice";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const { searchPosts, loading: loadingSearchPosts } = useSelector(
    (state) => state.searchPosts
  );
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(clearPostStore());
  }, []);
  useEffect(() => {
    dispatch(fetchPostsStart({ page }));
  }, [page]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <div>
      {searchPosts.length !== 0
        ? searchPosts.map((el, index) => <Post {...el} key={index} />)
        : posts?.map((el, index) => <Post {...el} key={index} />)}

      <div ref={ref} className="mt-10">
        {loading && "Loading..."}
      </div>
    </div>
  );
};

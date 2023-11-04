import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import debounce from "lodash.debounce";
import PostCard from "../components/PostCard";
import Header from "../components/Header";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [searchText, setSearchText] = useState("");

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const debounceSearch = debounce(changeSearchText, 500);

  useEffect(() => {
    dispatch(getAllPosts(searchText));
  }, [dispatch, searchText]);

  return (
    <div className="mb-5">
      <Header title="Posts" />

      <div className="search-bar container py-2 mb-3">
        <form className="w-100 text-center">
          <input
            type="text"
            placeholder="Find post"
            className="w-50"
            onChange={debounceSearch}
          />
        </form>
      </div>

      <div className="d-flex flex-column gap-3">
        {posts.length === 0 && (
          <div className="container p-0">
            <p className="text-danger fs-3">No post has this title</p>
          </div>
        )}
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

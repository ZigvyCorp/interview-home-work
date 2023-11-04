import React, { useEffect, useState } from "react";
import { fetchPostsFromAPI } from "../../apis/post";
import SearchItem from "./SearchItem";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [postsList, setPostsList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query) {
      const timer = setTimeout(async () => {
        setIsLoading(true);
        const postsRes = await fetchPostsFromAPI({
          title: query,
          limit: process.env.REACT_APP_POSTS_LIMIT,
          page: 1,
        });
        if (postsRes) {
          setPostsList(postsRes?.data);
        }
        setIsLoading(false);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }else{
      setPostsList([])
    }
  }, [query]);

  return (
    <div className="d-flex flex-column align-items-center mb-5 position-relative">
      <div>
        <input
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search"
        />
      </div>
      {loading && <p className="text-center m-3">Loading...</p>}
      {!loading && postsList.length > 0 && (
        <div className="dropdown">
          {postsList.map((p, index) => (
          <SearchItem
            id={p.id}
            title={p.title}
            userName={p.user.name}
            key={`post-search-result-${index}`}
          />
          ))}
        </div>
      )}
      {!loading && postsList.length === 0 && !!query && (
        <span className="text-center mt-3">Not found posts</span>
      )}
    </div>
  );
};

export default SearchBar;

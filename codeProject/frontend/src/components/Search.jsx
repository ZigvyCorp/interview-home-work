// src/pages/Search.js

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchPosts } from "../redux/actions/postActions";

const Search = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const searchResults = useSelector((state) => state.searchResults);

  const handleSearch = () => {
    dispatch(searchPosts(keyword));
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;

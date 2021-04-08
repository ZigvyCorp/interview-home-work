import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import PostCard from "../components/PostCard";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const isLoaded = Array.isArray(data);
  const posts = searchResults ? searchResults : data;

  useEffect(() => {
    dispatch({ type: "API_CALL_REQUEST_POSTS" });
  }, [dispatch]);

  useEffect(() => {
    const results =
      isLoaded &&
      data.filter((post) => post.title.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm, data, isLoaded]);

  return (
    <>
      {isLoaded && (
        <InputGroup
          className="mb-3 searchInput"
          onChange={handleChange}
          value={searchTerm}
        >
          <FormControl
            placeholder="Search..."
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      )}
      {isLoaded &&
        posts &&
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            authorName={post.authorName}
            body={post.body}
            comments={post.comments}
            collapseState={false}
          />
        ))}
    </>
  );
};

export default Home;

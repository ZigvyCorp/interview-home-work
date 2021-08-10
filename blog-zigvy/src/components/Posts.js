import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/actions";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  //posts
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  //search
  const [searchTerm, setSearchTerm] = useState("");

  //pagination
  const numItemsPerPage = 8;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(8);

  const handlePaginationChange = (value) => {
    setMinValue((value - 1) * numItemsPerPage);
    setMaxValue(value * numItemsPerPage);
  };

  return (
    <div className="posts">
      <form className="form">
        <input
          className="form-input-search"
          type="text"
          placeholder="Type to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {posts &&
        posts
          .filter((val) =>
            searchTerm === ""
              ? val
              : val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ? val
              : null
          )
          .slice(minValue, maxValue)
          .map((post) => <Post key={post.id} post={post} />)}
      <Pagination
        style={{ textAlign: "center", marginTop: "30px" }}
        defaultCurrent={1}
        defaultPageSize={numItemsPerPage}
        total={posts.length}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default Posts;

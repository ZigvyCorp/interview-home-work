import { Pagination, Spin } from "antd";
import Search from "antd/lib/input/Search";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../user/userSlice";
import Post from "./Post";
import { getPostAsync, searchPostAsync, selectPost } from "./postSlice";

export default function PostList() {
  const dispatch = useDispatch();
  const { posts, loadingPosts } = useSelector(selectPost);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    if (keyWord) {
      dispatch(searchPostAsync(keyWord));
      setCurrentPage(1);
    } else dispatch(getPostAsync(currentPage));
  }, [dispatch, currentPage, keyWord]);

  if (loadingPosts) return <Spin />;

  const changePage = (page) => {
    setCurrentPage(page);
  };
  const onSearch = (value) => {
    setKeyWord(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Search
        placeholder="search by title"
        allowClear
        onSearch={onSearch}
        style={{
          width: 400,

          display: "inline-block",
        }}
      />
      <ul>
        {posts.length ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>No post found</p>
        )}
      </ul>
      {!keyWord && (
        <Pagination
          simple
          size="small"
          total={100}
          onChange={changePage}
          current={currentPage}
          style={{ paddingBottom: "1rem" }}
        />
      )}
    </div>
  );
}

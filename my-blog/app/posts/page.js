"use client";
import styles from "../page.module.css";
import {
  fetchComments,
  fetchPosts,
  fetchUsers,
} from "@/app/server-action/store/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScrollComponent from "../components/InfinitiScroll";
import { mergedDataPost } from "@/constants/helper";
import SearchBar from "../components/SearchBar";

export default function Posts() {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchText);
  const posts = useSelector((state) => state.posts) ?? [];
  const users = useSelector((state) => state.users) ?? [];
  const comments = useSelector((state) => state.comments) ?? [];
  const [dataPost, setDataPost] = useState([]);
  const loading = useSelector((state) => state.loading) ?? true;
  useEffect(() => {
    setIsClient(true);
    dispatch(fetchPosts(""));
    dispatch(fetchUsers());
    dispatch(fetchComments());
  }, []);

  const filterPostByTextSearch = (searchText) => {
    const newListPosts = dataPost.filter((post) =>
      post.body?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setDataPost((prePost) => newListPosts);
  };

  useEffect(() => {
    if (!searchText) {
      setDataPost(mergedDataPost({ users, posts, comments }));
    } else {
      filterPostByTextSearch(searchText);
    }
  }, [posts, users, comments, searchText]);

  if (isClient) {
    if (loading) {
      return (
        <main
          className={`${styles.main} d-flex justify-content-center align-items-center`}
          style={{ minHeight: "100vh" }}
        >
          <div>Loading...</div>
        </main>
      );
    } else {
      return (
        <div>
          <div
            className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <SearchBar />
          </div>
          <div className="container mt-4" style={{ paddingTop: "50px" }}>
            <InfiniteScrollComponent allPosts={dataPost} />
          </div>
        </div>
      );
    }
  }
}

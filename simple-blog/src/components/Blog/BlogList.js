import React, { useState, useEffect } from "react";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import MyHeader from "../Header";
import BlogPost from "./BlogPost";
import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, loadMorePostsRequest } from "../../redux/actions";

const BlogList = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(loadMorePostsRequest(page));
  }, [dispatch, page]);

  const posts = useSelector((state) => state.posts);
  const searchKeyword = useSelector((state) => state.searchKeyword);

  // Tạo một hàm để lọc bài viết dựa trên từ khóa
  const filterPostsByKeyword = (posts, keyword) => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Sử dụng hàm để lấy danh sách bài viết đã lọc
  const filteredPosts = filterPostsByKeyword(posts, searchKeyword);

  console.log(posts);

  return (
    <div className="home-page">
      <MyHeader />
      <SearchBar />
      <InfiniteScroll
        dataLength={posts.length}
        next={() => dispatch(loadMorePostsRequest(page + 1))}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>No more ~~</h4>}
      >
        {filteredPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default BlogList;

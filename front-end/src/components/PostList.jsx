import React, { useEffect, useState } from "react";
import { postAPI } from "../api";
import { debounce } from "lodash";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, Skeleton } from "antd";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchMorePosts = async () => {
    try {
      const newPosts = await postAPI.getPosts(page);

      if (newPosts.data.length === 0) {
        setHasMore(false);
      } else {
        setPosts([...posts, ...newPosts.data]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      setHasMore(false);
    }
  };
  useEffect(() => {
    fetchMorePosts();
  }, []);
  const handleSearch = debounce(async (query) => {
    try {
      if (!query) {
        setPage(1);
        setHasMore(true);
        const res = await postAPI.getPosts(1);
        setPosts(res.data);
      } else {
        const res = await postAPI.searchPosts(query);
        setPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, 300);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          value={searchQuery}
          className="w-75 py-3 px-2 mx-auto  rounded-2  "
          placeholder="Search Post Title"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
      >
        {posts
          ? posts.map((post) => (
              <Post post={{ ...post, content: post.content ? post.content.substr(0, 100) : "" }} key={post._id} />
            ))
          : "Empty Post"}
      </InfiniteScroll>
    </div>
  );
};

export default PostList;

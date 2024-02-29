import { useSelector } from "react-redux";
import PostComponent from "../component/PostComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import CustomBar from "../component/CustomBar";
const BlogPage = () => {
  const postsState = useSelector((state) => state.post);
  const [search, setSearch] = useState("");
  const dataSourceLength = postsState.post.length;

  //! SIZE PAGE
  const [displayedPosts, setDisplayedPosts] = useState(
    postsState.post.slice(0, 2)
  );
  //! UPDATE MORE PAGE
  const fetchMoreData = () => {
    const nextIndex = displayedPosts.length + 2;
    const newPosts = postsState.post.slice(0, nextIndex);
    setDisplayedPosts(newPosts);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredPosts = postsState.post.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedPosts(filteredPosts);
  };

  return (
    <>
      <CustomBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      ></CustomBar>
      <div className="h-100">
        <InfiniteScroll
          dataLength={dataSourceLength}
          next={fetchMoreData}
          hasMore={dataSourceLength > displayedPosts.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {displayedPosts.map((item, index) => (
            <PostComponent key={index} item={item} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default BlogPage;

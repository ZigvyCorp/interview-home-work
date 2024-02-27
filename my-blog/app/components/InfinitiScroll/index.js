import React, { useState, useEffect, useRef } from "react";
import Post from "../Post";

const InfiniteScrollComponent = ({ allPosts }) => {
  // Vì API chỉ cho phép get 1 lần 100 bài nên tôi  fetch hết sau đó slice nó
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [next, setNext] = useState(10);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);
  const isCallingloadMorePosts = useRef(false);
  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      //If the loadMorePost function is calling, it will not be called again until done
      if (!isCallingloadMorePosts.current) loadMorePosts();
    }
  };

  const loadMorePosts = () => {
    setIsFetchingPosts(true);
    // ở đây sử dụng hàm setTimeout chờ 2 giây cho có cảm giác là đang load bài viết, cho cảm giác chờ
    isCallingloadMorePosts.current = true;
    setTimeout(() => {
      const morePosts = allPosts.slice(next, next + 10);
      setDisplayedPosts((prevPosts) => [...prevPosts, ...morePosts]);
      setNext(next + 10);
      setIsFetchingPosts(false);
      isCallingloadMorePosts.current = false;
    }, 2000);
  };

  useEffect(() => {
    setDisplayedPosts(allPosts.slice(0, 10));
  }, [allPosts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [next, allPosts]);

  return (
    <div>
      {displayedPosts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
      {/* nếu có thời gian sẽ làm loading đẹp hơn */}
      <div className="d-flex justify-content-center">
        {isFetchingPosts ? "Loading..." : null}
      </div>
    </div>
  );
};

export default InfiniteScrollComponent;

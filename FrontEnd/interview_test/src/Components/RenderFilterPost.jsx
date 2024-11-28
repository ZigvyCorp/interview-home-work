import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPostByQueryKeyword } from "../services/post.service.js";
import Post from "./Post.jsx";
import { Flex } from "antd";

const RenderFilterPost = () => {
  const [searchParams] = useSearchParams();
  const queryKeyword = searchParams.get("keyword");
  const [filterPost, setFilterPost] = useState([]);

  useEffect(() => {
    const fetchPostByKeyword = async () => {
      try {
        const response = await getPostByQueryKeyword(queryKeyword);
        setFilterPost(response.data.post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostByKeyword();
  }, [queryKeyword]);

  const renderFilterPost = filterPost.map((post) => {
    return (
      <React.Fragment key={post._id}>
        <Post post={post} />
        <div className="h-[3px] bg-black"></div>
      </React.Fragment>
    );
  });

  return (
    <Flex vertical gap={30}>
      {filterPost.length === 0 ? <p className="text-[20px] text-center">Not Found Post</p> : renderFilterPost}
    </Flex>
  );
};

export default RenderFilterPost;

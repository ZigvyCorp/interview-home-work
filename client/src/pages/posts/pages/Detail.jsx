import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetail } from "services/posts.service";
import { PostContainerStyled } from "./List";
import { Flex, Spin } from "antd";
import PostItem from "../components/PostItem";

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPostDetail(id)
        .then(setPost)
        .finally(() => setLoading(false));
    }
  }, [id]);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PostContainerStyled>
      <Flex vertical="vertical">
        {post && <PostItem key={post.id} post={post} viewDetail />}
        {loading ? <Spin size="large" /> : null}
      </Flex>
    </PostContainerStyled>
  );
};

export default Detail;

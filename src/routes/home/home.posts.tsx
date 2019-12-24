import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { postsSelector } from "src/routes/posts/posts.selector";
import PostsLoader from "src/routes/posts/posts.loader";
import withPosts from "src/routes/posts/posts.enhance";
import Posts from "src/routes/posts/posts";

interface IProps {}

const Styled = styled.div``;

const HomePost = (props: IProps) => {
  const { isFetched } = useSelector(postsSelector);
  return (
    <Styled className="home-posts">
      {!isFetched ? <PostsLoader /> : <Posts />}
    </Styled>
  );
};

export default withPosts(HomePost);

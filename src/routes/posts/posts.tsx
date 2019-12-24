import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { postsSelector } from "./posts.selector";
import Post from "src/routes/post/post";

interface IProps {}

const Styled = styled.div`
  &.posts {
    .break {
      background: #fff;
      height: 2px;
      border-radius: 2px;
      margin: 50px auto;
      max-width: 65%;
    }
  }
`;

const Posts = (props: IProps) => {
  const { data } = useSelector(postsSelector);
  return (
    <Styled className="posts">
      {data.map((item: any) => (
        <Post key={item.id} id={item.id} />
      ))}
    </Styled>
  );
};

export default Posts;

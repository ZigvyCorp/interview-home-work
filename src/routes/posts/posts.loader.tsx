import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

interface IProps {}

const Styled = styled.div`
  &.posts-loader {
    .loader-item {
      margin: 0 auto;
      max-width: 60%;
      min-height: 350px;
      height: 65vh;
      margin-top: 100px;
      :first-child {
        margin-top: unset;
      }
    }
  }
`;

const Loader = (props: any) => (
  <ContentLoader speed={2} primaryColor="#e3e3e3" secondaryColor="#fff3f3">
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);

const PostLoader = (props: IProps) => {
  return (
    <Styled className="posts-loader">
      {[...Array(10)].map((item: any, index) => (
        <div className="loader-item" key={index}>
          <Loader />
        </div>
      ))}
    </Styled>
  );
};

export default PostLoader;

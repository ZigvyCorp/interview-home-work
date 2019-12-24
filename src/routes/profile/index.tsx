import React from "react";
import styled from "styled-components";
import withProfile from "./profile.enhance";
import Header from "src/shared/components/header";
import Posts from "./profile.posts";

interface IProps {}

const Styled = styled.div``;

const Profile = (props: IProps) => {
  return (
    <Styled className="profile">
      <Header />
      <Posts />
    </Styled>
  );
};

export default withProfile(Profile);

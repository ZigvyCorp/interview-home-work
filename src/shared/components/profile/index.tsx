import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { authSelector } from "src/auth/auth.selector";
import { getEnvs } from "src/shared/utils";
import { avatarIcon } from "src/shared/assets";
import { withRouter } from "react-router-dom";

interface IProps {
  history: any;
}

const Styled = styled.div`
  &.profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    .name {
      padding: 0 10%;
      min-width: 100px;
      text-align: center;
    }
    .avatar {
      width: 48px;
      height: 48px;
    }
  }
`;

const Profile = (props: IProps) => {
  const {
    name,
    avatar_url = `${avatarIcon()}`
  }: {
    name: string;
    avatar_url: string;
  } = useSelector(authSelector).data;
  return (
    <Styled className="profile" onClick={() => props.history.push("/profile")}>
      <p className="name ellipsis">{!!name ? name : "(Empty)"}</p>
      <div className="avatar">
        <img src={avatar_url} alt="" />
      </div>
    </Styled>
  );
};

export default withRouter(Profile);

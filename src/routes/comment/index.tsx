import React from "react";
import styled from "styled-components";
import withComment from "./comment.enhance";
import { avatarIcon } from "src/shared/assets";
import { formatTimeByDate } from "src/shared/utils";

interface IProps {
  comment: any;
  id: number | any;
}

const Styled = styled.div`
  &.comment {
    display: flex;
    padding: 5%;
    .left-col .avatar {
      width: 48px;
      height: 48px;
    }
    .right-col {
      padding-left: 2%;
    }
    .right-col .content {
      margin-top: 10px;
      font-size: 1vw;
      line-height: 1.5vw;
    }
    .right-col .block-name {
      display: flex;
    }
    .right-col .block-name .name {
      min-width: 100px;
      color: rgba(170, 170, 170, 0.8);
      font-size: 0.8vw;
      line-height: 1vw;
    }
    .right-col .block-name .time {
      color: rgba(170, 170, 170, 0.5);
      font-size: 0.8vw;
      line-height: 1vw;
    }
  }
`;

const Comment = (props: IProps) => {
  const { comment, id } = props;
  const { name, created_at, content, avatar_url = avatarIcon() } = comment[
    id
  ].data;
  return (
    <Styled className="comment">
      <div className="left-col">
        <div className="avatar">
          <img src={avatar_url} alt="" />
        </div>
      </div>
      <div className="right-col">
        <div className="block-name">
          <p className="name ellipsis">{!!name ? name : "Stranger"}</p>
          <p className="time">{formatTimeByDate(created_at)}</p>
        </div>
        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        ></p>
      </div>
    </Styled>
  );
};

export default withComment(Comment);

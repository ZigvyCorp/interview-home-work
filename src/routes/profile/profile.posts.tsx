import React from "react";
import styled from "styled-components";
import useTranslate from "src/shared/hooks/useTranslate";
import { useSelector, useDispatch } from "react-redux";
import { postsSelector } from "./profile.selector";
import { Link } from "react-router-dom";
import { ACTION_REMOVE_POST } from "./profile.constant";
import { removeIcon, updateIcon } from "src/shared/assets";
import { withRouter } from "react-router-dom";

interface IProps {
  history: any;
}

const Styled = styled.div`
  margin-top: 5%;
  .hook {
    display: grid;
    grid-template-columns: 2fr 2fr 5fr 1fr 1fr;
    grid-gap: 20px;
    border-top: solid 2px #fff;
    align-items: center;
    padding: 1%;
    :hover {
      background: #1a1919;
    }
    :first-child {
      padding: 2% 1%;
      :hover {
        background: unset;
      }
      .item {
        text-transform: uppercase;
        font-family: Roboto-Bold;
        font-size: 1.5vw;
        line-height: 1.8vw;
      }
    }
    :last-child {
      border-bottom: solid 2px #fff;
    }
  }
  .hook .icon {
    width: 32px;
    height: 32px;
  }
`;

const Posts = (props: IProps) => {
  const [translate]: any = useTranslate();
  const { id, title, content } = translate.profile.posts;
  const { isFetched, data } = useSelector(postsSelector);
  const dispatch = useDispatch();
  const handleRemovePost = (e: any, id: string) => {
    e.preventDefault();
    dispatch({
      type: ACTION_REMOVE_POST,
      payload: id
    });
  };
  return (
    <Styled className="posts">
      <div className="hook">
        <p className="item">{id}</p>
        <p className="item">{title}</p>
        <p className="item">{content}</p>
        <p className="item"></p>
        <p className="item"></p>
      </div>
      {isFetched &&
        data.map((item: any, key: string) => (
          <div className="hook" key={item.id}>
            <p className="item">{key + 1}</p>
            <Link className="item" to={`/post/${item.id}`}>
              {item.title}
            </Link>
            <p
              className="item"
              dangerouslySetInnerHTML={{
                __html:
                  item.content.length > 100
                    ? `${item.content.substring(0, 100)}...`
                    : item.content
              }}
            ></p>
            <Link
              to="/"
              className="icon"
              onClick={(e: any) => handleRemovePost(e, item.id)}
            >
              <img src={removeIcon()} alt="" />
            </Link>
            <Link to={`/update-post/${item.id}`} className="icon">
              <img src={updateIcon()} alt="" />
            </Link>
          </div>
        ))}
    </Styled>
  );
};

export default withRouter(Posts);

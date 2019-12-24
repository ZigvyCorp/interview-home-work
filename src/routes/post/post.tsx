import React from "react";
import withPost from "./post.enhance";
import { formatTimeByDate, genValFromArr } from "src/shared/utils";
import { Link } from "react-router-dom";
import { Styled } from "./post.styled";
import { bgFactories } from "./post.util";
import Comments from "./childs/comments";

interface IProps {
  id: number;
  post: any;
  translate: any;
  history: any;
  match: any;
  details: boolean;
  showComments: boolean;
  location: any;
}

const Post = (props: IProps) => {
  const {
    id,
    post,
    translate,
    history,
    details = false,
    showComments = false,
    location
  } = props;
  const { createdAt, author } = translate.post;
  const { title, content, users, created_at, tags } = post[id].data;
  const path = `/post/${id}`;
  return (
    <Styled
      onClick={() => (location.pathname !== path ? history.push(path) : false)}
      className="post-item"
    >
      <div className="extra">
        <h4 className="title">{title}</h4>
        <div className="hook">
          <div className="left-col">
            <p className="author">
              <span>{author}</span>
              <span>{!!users.name ? users.name : "Stranger"}</span>
            </p>
            <p className="created-at">
              <span>{createdAt}</span>
              <span>{formatTimeByDate(created_at)}</span>
            </p>
          </div>
          <div className="right-col">
            <div className="tags">
              {tags.map((item: any, index: number | string) => (
                <Link
                  to={`/${item}`}
                  className="tag"
                  key={index}
                  style={{
                    border: `solid 2px ${genValFromArr(bgFactories)}`
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p
          className="content"
          dangerouslySetInnerHTML={{
            __html: details ? content : `${content.substring(0, 100)}...`
          }}
        ></p>
      </div>
      <div className="break"></div>
      {showComments && <Comments id={id} />}
    </Styled>
  );
};

export default withPost(Post);

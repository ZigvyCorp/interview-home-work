import React, { useState } from "react";
import { Posts } from "../../API/Post/Interface/";

interface IProps {
  PostList?: Posts.PostList;
}

const PostItem = (props: Posts.Post) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const truncLength = 100;

  return (
    <div className="container mt-2" key={props.id}>
      <div className="border-bottom">
        <h1 className="text-center fw-bold">{props.title}</h1>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4>Author: {props.owner}</h4>
            <h4>Create at: {props.created_at}</h4>
          </div>
          <div>
            <ul
              className="d-flex"
              style={{
                listStyle: "none",
              }}
            >
              {props.tags?.map((item) => {
                return (
                  <li
                    className="w-100 p-2 mx-1 text-white rounded fw-bold"
                    style={{
                      backgroundColor: "#dc3545",
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <p>
          {isCollapse ? props.content : props.content?.slice(0, truncLength)}
          <span
            onClick={() => setIsCollapse((prev) => !prev)}
            className="fw-bold"
          >
            {isCollapse ? " show less" : " read more"}
          </span>
        </p>
      </div>
    </div>
  );
};

export const PostComponent = (props: IProps) => {
  const { PostList } = props;

  return (
    <>
      {PostList?.map((item) => {
        return <PostItem {...item} />;
      })}
    </>
  );
};

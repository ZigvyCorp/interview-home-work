import React, { useEffect, useState } from "react";
import { Post } from "../models/PostModel";
import { Collapse, Tag } from "antd";
import { useAppSelector } from "../redux/hooks";
import { CommentState } from "../redux/reducer/commentReducer";
import CommentComponent from "./CommentComponent";

const { Panel } = Collapse;

interface PostComponentProps {
  post?: Post;
}

const PostComponent = (props: PostComponentProps) => {
  const { post } = props;
  const commentState = useAppSelector(CommentState);

  return (
    <div className="rounded bg-white shadow p-2 m-8">
      <h4 className="text-4xl text-center">{post?.title}</h4>
      <div className="flex justify-between items-center">
        <div>
          <p>Author: {post?.ownerDetail?.name}</p>
          <p>Created at: {post?.createdAt}</p>
        </div>
        <div>
          {post?.tags?.map((tag, index) => (
            <Tag key={index} color="magenta">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="mt-4">{post?.content}</div>
      <div className="mt-4">
        <Collapse defaultActiveKey={["comment"]}>
          <Panel header={`${commentState?.data?.filter((comment) => comment.post === post?.id)?.length} Replies`} key="comment">
            {commentState?.data?.filter((comment) => comment.post === post?.id)?.map(comment => (
                <CommentComponent key={comment?.id} comment={comment} />
            ))}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PostComponent;

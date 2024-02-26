import React, { useEffect, useState } from "react";
import UserApi from "../apis/UserApi";
import CommentApi from "../apis/CommentApi";
import { Avatar, Button, Tag, Tooltip } from "antd";
import moment from "moment";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Comment } from "@ant-design/compatible";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState([]);
  const [isCollapse, setIsCollapse] = useState(true);

  const getUser = async (userId) => {
    const data = await UserApi.getUser(userId);
    setAuthor(data);
  };

  const getComments = async (userId) => {
    const data = await CommentApi.getComments(userId);
    setComments(data);
  };

  useEffect(() => {
    if (post?.id) {
      getUser(post.userId);
      getComments(post.id);
    }
  }, [post?.id]);

  return (
    <div className="w-[60vw] border-2 my-5 p-5 border-solid border-black text-left">
      <div className="text-center mb-3">
      <Link className="text-2xl font-bold text-center" to={`/${post.id}`}>{post?.title ?? ""}</Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-left">
          <p>{`Author: ${author?.name ?? ""}`}</p>
          <p>{`Created at: ${moment(new Date()).format("MMM D, YYYY")}`}</p>
        </div>
        <div className="w-[30%]">
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
        </div>
      </div>
      <div className="mt-3">
        <Tooltip title={post.body}>
          {post.body.length <= 100 ? (
            <p>{post.body}</p>
          ) : (
            <p>{`${post.body.slice(0, 100)} ...`}</p>
          )}
        </Tooltip>
      </div>
      <div className="border-b-2 border-solid border black border-x-0 border-t-0  ">
        <Button type="link" onClick={() => setIsCollapse(!isCollapse)}>
          {`${comments.length ?? 0} replies`}
          {!isCollapse ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </div>
      {!isCollapse && comments.length > 0 && (
        <div>
          {comments.map((comment) => {
            return (
              <Comment
                author={<a>{comment.name}</a>}
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt={comment.name}
                  />
                }
                content={
                  <p>
                    {comment.body}
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostItem;

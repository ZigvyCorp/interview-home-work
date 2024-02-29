/* eslint-disable react/prop-types */
import { Fragment, useState, useEffect } from "react";
import { Space, Tag, Collapse } from "antd";
import CommentItem from "../CommentItem/CommentItem";
import { getUserById } from "../../api/userApi";
import { getCommentByPostId } from "../../api/postsApi";

const PostItems = ({ post }) => {
  // console.log(post);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUserByUserId = async () => {
      try {
        // console.log(post?.author);

        const res = await getUserById(post?.author);
        if (res.user) {
          setUser(res.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserByUserId();
  }, [post.author]);

  useEffect(() => {
    const FetchComment = async () => {
      try {
        const res = await getCommentByPostId(post?._id);
        setComments(res.comment);
        // console.log(res.comment);
      } catch (error) {
        console.log(error);
      }
    };
    FetchComment();
  }, [post._id]);
  return (
    <div className="max-w-6xl">
      <h2 className="text-center text-4xl font-semibold">{post.title}</h2>
      <div className="flex justify-between w-full mt-4 ">
        <div className="w-1/2">
          <p>Author: {user?.name}</p>
          <p>Created at: Sep 20, 2018</p>
        </div>
        <div className="w-1/2">
          <Space size={[0, 8]} wrap>
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
          </Space>
        </div>
      </div>
      <p className="mt-4">
        {post.body && (
          <>
            {post.body.length > 100 ? (
              <>
                {post.body.substring(0, 100).charAt(0).toUpperCase() +
                  post.body.substring(1, 100)}
                ...
              </>
            ) : (
              post.body.charAt(0).toUpperCase() + post.body.substring(1)
            )}
          </>
        )}
      </p>
      <div>
        <Collapse
          className="bg-white p-0"
          bordered={false}
          items={[
            {
              key: "1",
              label: `${comments.length} replies`,
              children: comments?.map((comment) => {
                return <CommentItem key={comment._id} comment={comment} />;
              }),
            },
          ]}
          expandIcon={({ isActive }) =>
            isActive ? <Fragment /> : <Fragment />
          }
        />
      </div>
    </div>
  );
};

export default PostItems;

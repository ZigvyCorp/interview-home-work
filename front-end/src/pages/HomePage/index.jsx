import React from "react";
import { Content } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import BlogItem from "../../components/BlogItem";

const HomePage = () => {
  const { blogs, isLoading } = useSelector((state) => state.blogs);
  const { users } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.comments);
  return (
    <Content>
      {!isLoading &&
        blogs?.map((blog, index) => {
          const postUser = users?.find((user) => user.id === blog?.userId);
          const postComment = comments?.filter(
            (comment) => comment.postId === blog.id
          );

          return (
            <BlogItem
              key={blog?.id || new Date().getDate() + index}
              id={blog.id}
              user={postUser}
              comments={postComment}
              description={blog.body}
              title={blog.title}
            />
          );
        })}
    </Content>
  );
};

export default HomePage;

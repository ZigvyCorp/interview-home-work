import { Content } from "antd/es/layout/layout";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import BlogItem from "../../components/BlogItem";
import useQuery from "../../hooks/useQuery";
import blogService from "../../services/blogService";
import { useSelector } from "react-redux";

const BlogDetailPage = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.comments);

  const { data: blog } = useQuery(() => {
    return blogService.getBlogById(id);
  }, [id]);

  const postUser = users?.find((user) => user.id === blog?.userId);
  const postComment = comments?.filter((comment) => comment.postId === blog.id);

  return (
    <Content style={{ height: "100vh" }}>
      <BlogItem
        id={id}
        user={postUser}
        comments={postComment}
        description={blog?.body}
        title={blog?.title}
        className="post-detail-page"
      />
    </Content>
  );
};

export default BlogDetailPage;

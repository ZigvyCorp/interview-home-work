import { useMutation } from "@tanstack/react-query";
import { Button, Collapse, Form, Input, List, message } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import postsApi from "../../api/posts.api";
import CommentItem from "../../components/comments/CommentItem";
import CustomPagination from "../../components/pagination/CustomPagination";
import PostsCard from "../../components/posts/PostCard";
import { useCommentsByPosts } from "../../hooks/useComments";
import { usePostsById } from "../../hooks/usePosts";
import { IComment, ICreateComment } from "../../types/comment";

const PostsDetail: React.FC = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [form] = Form.useForm();
  const { data: posts } = usePostsById(id as string);
  const {
    data: comments,
    isLoading,
    refetch,
  } = useCommentsByPosts({
    id: id as string,
    page: currentPage,
    limit: pageSize,
  });

  const onPageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const createComment = useMutation({
    mutationFn: (values: ICreateComment) => {
      return postsApi.createComment(id as string, values.content);
    },
    onError: (error) => {
      console.log("🚀 ~ createComment ~ error", error);
    },
    onSuccess: () => {
      form.resetFields();
      message.success("Comment created successfully!");
      refetch();
    },
  });

  const onSubmitComment = (values: ICreateComment) => {
    createComment.mutate(values);
  };

  return (
    <div className="p-4">
      <div>{posts ? <PostsCard post={posts.data} /> : "Loading..."}</div>
      <div>
        <Form form={form} onFinish={onSubmitComment}>
          <Form.Item
            name="content"
            rules={[
              {
                required: true,
                message: "Please input your comment!",
              },
            ]}
          >
            <Input.TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
              placeholder="Add a comment..."
            />
          </Form.Item>
          <div className="flex justify-end">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Comment
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div>
        <Collapse
          collapsible={
            comments?.meta?.total && comments?.meta?.total > 0
              ? "header"
              : "disabled"
          }
          items={[
            {
              key: "comments",
              label: `${
                comments?.meta?.total && comments?.meta?.total > 0
                  ? `${comments?.meta?.total} replies`
                  : `There are no comments for this article yet`
              } `,
              children: (
                <>
                  <List
                    loading={isLoading}
                    dataSource={
                      Array.isArray(comments?.data) ? comments.data : []
                    }
                    renderItem={(comment: IComment) => (
                      <CommentItem comment={comment} />
                    )}
                  />
                  <div className="flex justify-end">
                    <CustomPagination
                      pageSize={pageSize}
                      currentPage={currentPage}
                      total={comments?.meta?.total || 0}
                      onPageChange={onPageChange}
                    />
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PostsDetail;

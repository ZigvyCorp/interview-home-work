import { Divider, Form, Input } from "antd";
import { map, size } from "lodash";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPagination from "../../components/pagination/CustomPagination";
import PostsCard from "../../components/posts/PostCard";
import { usePosts } from "../../hooks/usePosts";
import { IPosts } from "../../types/posts";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const {
    data: posts,
    isLoading,
    isError,
  } = usePosts({
    page: currentPage,
    limit: pageSize,
    search,
  });

  const onPageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const handleSubmitSearchPosts = (values: { search: string }) => {
    setSearch(values.search);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between pb-4">
        <div className="w-1/2">
          <Form
            form={form}
            name="search-posts"
            onFinish={handleSubmitSearchPosts}
          >
            <Form.Item name="search">
              <Input
                size="large"
                placeholder="Please enter a title and press enter"
                allowClear
              />
            </Form.Item>
          </Form>
        </div>
        <span className="cursor-pointer" onClick={() => handleLogout()}>
          Logout
        </span>
      </div>

      {map(posts?.data, (post: IPosts, index: number) => (
        <React.Fragment key={post.id}>
          <PostsCard post={post} />
          {index < size(posts.data) - 1 && <Divider className="bg-black" />}
        </React.Fragment>
      ))}
      {posts?.meta.total > 0 && (
        <div className="flex justify-end">
          <CustomPagination
            pageSize={pageSize}
            currentPage={currentPage}
            total={posts?.meta?.total || 0}
            onPageChange={onPageChange}
          />
        </div>
      )}
      {!posts?.meta.total && <p className="text-center">No posts found.</p>}
    </div>
  );
};

export default Home;

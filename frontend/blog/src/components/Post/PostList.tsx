import {  useState } from "react";
import {  useSelector } from "react-redux";
import { PostDetail } from "./PostDetail";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { RootState } from "../../redux/store";

export const PostList = () => {
  const blog = useSelector((state: RootState) => state.blogs);
  const searchBlog = useSelector((state: RootState) => state.search);
  const localtion = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 5;

  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = localtion.pathname === "/search" ?  searchBlog.data?.slice(indexOfFirstPost, indexOfLastPost): blog.data?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {currentPosts?.map((post: any) => (
        <PostDetail
          key={post.id}
          id={`${post.id}`}
          content={`${post.content}`}
          created_at={`${post.created_at}`}
          owner={`${post.owner}`}
          tags={post.tags}
        />
      ))}
      <div className="pagination">
        {[...Array(Math.ceil(blog.data?.length / postsPerPage))].map(
          (_, index) => (
            <Button
              type="primary"
              shape="circle"
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

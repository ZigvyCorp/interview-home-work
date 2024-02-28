import { IUser } from "@/common/@types/types";
import Post, { IPostProps } from "@/components/Post/Post";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const POST_PER_PAGE = 10;

const HomePage = () => {
  const [posts, setPosts] = React.useState<IPostProps[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [currentPageActive, setCurrentPageActive] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  useEffect(() => {
    const fetchTotalPost = async () => {
      const [totalPostRes, usersData] = await Promise.all([
        postApi.getPosts(),
        userApi.getUsers(),
      ]);
      setUsers(usersData);
      setTotalPages(Math.ceil(totalPostRes.length / POST_PER_PAGE));
    };
    fetchTotalPost();
  }, []);

  useEffect(() => {
    const fetchPostPagination = async () => {
      const postsData = await postApi.getPostPagination(
        currentPageActive,
        POST_PER_PAGE
      );

      const postsWithAuthor: IPostProps[] = postsData.map((post) => {
        return {
          id: post.id,
          author:
            users.find((user) => user.id === post.userId)?.name ?? "Unknow",
          createdAt: "thg 2 10, 12:00 SA",
          title: post.title,
          body: post.body,
        };
      });

      setPosts(postsWithAuthor);
    };
    fetchPostPagination();
  }, [currentPageActive, users]);

  return (
    <div className="container">
      <Pagination className="mt-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageIndex = index + 1;
          return (
            <Pagination.Item
              active={pageIndex === currentPageActive}
              key={pageIndex}
              onClick={() => setCurrentPageActive(pageIndex)}
            >
              {pageIndex}
            </Pagination.Item>
          );
        })}
      </Pagination>
      <div className="row">
        {posts.map((post) => (
          <div className="col-4" key={post.id}>
            <Post
              id={post.id}
              author={post.author}
              body={post.body}
              createdAt="thg 2 10, 12:00 SA"
              title={post.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

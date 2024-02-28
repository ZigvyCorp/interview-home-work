import { IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import Post, { IPostProps } from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const POST_PER_PAGE = 10;
const DEBOUNCE_TIME = 500;

const HomePage = () => {
  const [posts, setPosts] = React.useState<IPostProps[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [currentPageActive, setCurrentPageActive] = React.useState<number>(1);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [totalPages, { debouncedSetValue }] = useDebouncedState<number>(
    0,
    DEBOUNCE_TIME
  );

  useEffect(() => {
    const fetchTotalPost = async () => {
      try {
        setIsFetching(true);
        const [totalPostRes, usersData] = await Promise.all([
          postApi.getPosts(),
          userApi.getUsers(),
        ]);
        setUsers(usersData);
        debouncedSetValue(Math.ceil(totalPostRes.length / POST_PER_PAGE));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };
    fetchTotalPost();
  }, [debouncedSetValue]);

  useEffect(() => {
    const fetchPostPagination = async () => {
      try {
        setIsFetching(true);
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
      } catch (error) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };
    fetchPostPagination();
  }, [currentPageActive, users]);

  return (
    <div className="container">
      <div className="row">
        <Pagination className="mt-3">
          {Array.from({ length: totalPages.value }).map((_, index) => {
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

        {isFetching || isError
          ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="col-4">
                <PostSkeleton />
              </div>
            ))
          : posts.map((post) => (
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

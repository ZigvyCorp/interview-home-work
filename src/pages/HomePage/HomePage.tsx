import { IPost, IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import Post, { IPostProps } from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import { postsSelector } from "@/store/features/posts/postsSelector";
import { getPostsThunk } from "@/store/features/posts/postsThunkAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";

const POST_PER_PAGE = 9;
const DEBOUNCE_TIME = 500;

const HomePage = () => {
  const { posts } = useAppSelector(postsSelector);
  const dispatch = useAppDispatch();

  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [filteredPosts, setFilteredPosts] = useState<IPostProps[]>([]);

  const [{ value: currentPage }, { debouncedSetValue: setCurrentPage }] =
    useDebouncedState<number>(1, DEBOUNCE_TIME);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        dispatch(getPostsThunk());
        const usersRes = await userApi.getUsers();
        setUsers(usersRes);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * POST_PER_PAGE;
    const end = currentPage * POST_PER_PAGE;
    const newPosts = posts.slice(start, end);
    setFilteredPosts(
      newPosts.map((post) => {
        return {
          id: post.id,
          title: post.title,
          body: post.body,
          createdAt: "thg 2 10, 12:00 SA",
          author: users.find((user) => user.id === post.userId)?.name,
        };
      })
    );
  }, [currentPage, posts, users]);

  return (
    <div className="container">
      <div className="row">
        <Pagination
          className="mb-3 mt-4"
          showLessItems={true}
          showSizeChanger={false}
          defaultCurrent={1}
          total={posts.length}
          current={currentPage}
          pageSize={POST_PER_PAGE}
          onChange={(page) => setCurrentPage(page)}
        />

        {isLoading || isError
          ? Array.from({ length: POST_PER_PAGE }).map((_, index) => (
              <div className="col-4" key={index}>
                <PostSkeleton />
              </div>
            ))
          : filteredPosts.map((post) => (
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

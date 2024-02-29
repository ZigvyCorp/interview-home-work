import { IPost, IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import postsApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import { Pagination, PaginationProps } from "antd";
import { useEffect, useState } from "react";

const DEBOUNCE_DELAY = 300;
const paginationConfig: PaginationProps = {
  defaultCurrent: 1,
  pageSize: 9,
  showSizeChanger: false,
  total: 100,
};

const HomePage = () => {
  const [{ value: page }, { debouncedSetValue: setPage }] =
    useDebouncedState<number>(1, DEBOUNCE_DELAY);
  const [users, setUsers] = useState<IUser[] | undefined>();
  const [posts, setPosts] = useState<IPost[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const [postsRes, usersRes] = await Promise.all([
          postsApi.getPostPagination(page, 9),
          userApi.getUsers(),
        ]);

        setUsers(usersRes);
        setPosts(postsRes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [page]);

  return (
    <div className="container mt-5">
      <Pagination onChange={(p) => setPage(p)} {...paginationConfig} />
      <div className="row mt-4">
        {!posts || isLoading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div className="col-4" key={i}>
                <PostSkeleton />
              </div>
            ))
          : posts.map((post) => {
              const author = users?.find((u) => u.id === post.userId)?.name;
              return (
                <div className="col-4" key={post.id}>
                  <Post
                    id={post.id}
                    author={author ?? "Unknown"}
                    body={post.body}
                    createdAt="thg 2 10, 12:00 SA"
                    title={post.title}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;

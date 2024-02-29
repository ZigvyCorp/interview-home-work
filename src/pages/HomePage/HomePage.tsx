import { IPost, IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import paginate from "@/common/utils/paginate";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import postsApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import { Pagination, PaginationProps } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Form } from "react-bootstrap";

const DEBOUNCE_DELAY = 300;
const POST_PER_PAGE = 9;

const paginationConfig: PaginationProps = {
  defaultCurrent: 1,
  pageSize: POST_PER_PAGE,
  showSizeChanger: false,
};

const HomePage = () => {
  const [users, setUsers] = useState<IUser[] | undefined>();
  const [posts, setPosts] = useState<IPost[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [{ value: page }, { debouncedSetValue: setPage }] =
    useDebouncedState<number>(1, DEBOUNCE_DELAY);
  const [{ value: searchDebounce }, { debouncedSetValue: setSearchDebounce }] =
    useDebouncedState<string>("", 700);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSearchDebounce(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [postsRes, usersRes] = await Promise.all([
          postsApi.getPosts(),
          userApi.getUsers(),
        ]);

        setPosts(postsRes.filter((p) => p.title.includes(searchDebounce)));
        setUsers(usersRes);
        setIsLoading(false);
      } catch (error) {
        setPosts([]);
      }
    };
    fetchData();
  }, [searchDebounce]);

  const memoData = useMemo(() => {
    return paginate(posts ?? [], page, POST_PER_PAGE);
  }, [page, posts]);

  return (
    <div className="container mt-5">
      <Pagination
        onChange={(p) => setPage(p)}
        {...paginationConfig}
        total={memoData.totalItems}
      />
      <Form.Control
        type="text"
        placeholder="Nhập tiêu đề cần tìm kiếm!"
        className=" mr-sm-2 mt-3"
        value={search}
        onChange={handleInputChange}
      />
      <div className="row mt-4">
        {!memoData.items || isLoading
          ? Array.from({ length: POST_PER_PAGE }).map((_, i) => (
              <div className="col-4" key={i}>
                <PostSkeleton />
              </div>
            ))
          : memoData.items.map((post) => {
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

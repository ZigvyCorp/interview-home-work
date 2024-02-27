import { Input, Pagination, Spin } from "antd";
import PostCard from "../../components/post-card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Fragment, useEffect, useState } from "react";
import { getPosts } from "../../redux/reducer/Post";

const { Search } = Input;
const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading } = useSelector((state: any) => state.post);

  const defaulttPageSize = 10;
  const [page, setPage] = useState(1);
  const [labelSearch, setLabelSearch] = useState("");
  const [postSearch, setPostSearch] = useState<any>([]);
  const [postPage, setPostPage] = useState<any>([]);

  useEffect(() => {
    dispatch(getPosts({}));
  }, []);

  const onChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (labelSearch !== "") {
      const result = posts?.filter((data: any) =>
        data?.title?.toLowerCase().includes(labelSearch.toLowerCase())
      );
      setPage(1);
      setPostSearch(result);
    } else {
      setPostSearch(posts);
    }
  }, [posts, labelSearch]);

  useEffect(() => {
    const result = postSearch?.slice(
      (page - 1) * defaulttPageSize,
      page * defaulttPageSize
    );

    setPostPage(result);
  }, [page, postSearch]);

  return (
    <div
      style={{
        padding: "0 64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          margin: "auto",
          width: "100%",
          marginTop: "64px",
          maxWidth: "var(--max-width)",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <Search
            style={{
              width: "500px",
              margin: "auto",
            }}
            onSearch={(title: string) => setLabelSearch(title)}
            allowClear
            placeholder="Enter title..."
          />
        </div>
        {!loading ? (
          postPage?.map((el: any, index: any) => (
            <Fragment key={index}>
              <PostCard data={el} />
            </Fragment>
          ))
        ) : (
          <Spin />
        )}
        {postPage?.length > 0 && (
          <Pagination
            current={page}
            onChange={onChange}
            total={postSearch?.length}
            defaultPageSize={defaulttPageSize}
            showSizeChanger={false}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;

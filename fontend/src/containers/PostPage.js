import React, { useEffect, useState } from "react";
import { Input, Spin, Pagination } from "antd";
import { CardPost } from ".";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import * as actions from "../store/actions/post.action";
const { Search } = Input;

const PostPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [titleSearch, setTitleSearch] = useState("");
  const [page, setPage] = useState(1);
  const [listPost, setListPost] = useState([]);
  const [postSearch, setPostSearch] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  useEffect(() => {
    setIsLoding(false);
    setTimeout(() => {
      dispatch(actions.getPosts());
      setIsLoding(true);
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    if (titleSearch !== "") {
      const result = posts?.filter((post) =>
        post?.title?.toLowerCase().includes(titleSearch.toLowerCase())
      );
      setPage(1);
      setPostSearch(result);
    } else {
      setPostSearch(posts);
    }
  }, [posts, titleSearch]);

  useEffect(() => {
    const result = postSearch?.slice((page - 1) * 10, page * 10);

    setListPost(result);
  }, [page, postSearch]);

  const onChangePage = (page) => {
    setPage(page);
  };
  return (
    <div className="">
      <Search
        placeholder="input search text"
        className="w-[90%] mt-14 "
        onChange={(e) => setTitleSearch(e.target.value)}
        allowClear
      />
      {isLoading ? (
        listPost?.map((post, index) => {
          return <CardPost key={index} posts={post} />;
        })
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      )}
      {listPost?.length > 0 && (
        <div className="mb-10">
          <Pagination
            current={page}
            onChange={onChangePage}
            total={postSearch?.length}
            defaultPageSize={10}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

export default PostPage;

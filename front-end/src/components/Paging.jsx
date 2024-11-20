import React from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
const Paging = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const posts = useSelector((state) => state.postReducer.posts);

  if (!posts) return;
  const { limit, total, page, search } = posts;

  const handlerChangePage = (page, limit) => {
    let url = `?page=${page ? page : 1}&limit=${limit}`;
    if (search) {
      url += `&search=${search}`;
    }

    setSearchParams(url);
  };

  return (
    <Pagination
      style={{ marginTop: "15px", textAlign: "center", margin: "1rem 0" }}
      total={total}
      showTotal={(total) => `Total ${total} items`}
      current={parseInt(page) ? parseInt(page) : 1}
      onChange={handlerChangePage}
      //   onShowSizeChange={handlerChangePage}
      pageSize={limit ? limit : 1}
      showQuickJumper={true}
      showSizeChanger={true}
      pageSizeOptions={["10", "20", "50", "100"]}
    />
  );
};

export default Paging;

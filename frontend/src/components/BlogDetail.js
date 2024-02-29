import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "./Blog";
import { getPostDetail } from "../apis/postsApis";

const BlogDetail = () => {
  const { bid } = useParams();
  const [dataBlog, setDataBlog] = useState(null);
  useEffect(() => {
    const getDataBlog = async () => {
      const rs = await getPostDetail({ bid: bid });
      setDataBlog(rs.data);
    };
    getDataBlog();
  }, [bid]);
  return (
    <div>
      <div className="d-flex mb-4 mt-4 gap-1 fw-bold">
        <a href="/">{"Blogs"}</a>
        <p>{">"}</p>
        <a href={`/blog-detail/${bid}`}>{dataBlog?.title}</a>
      </div>

      {dataBlog && <Blog idBlog={dataBlog?._id} item={dataBlog} />}
    </div>
  );
};

export default BlogDetail;

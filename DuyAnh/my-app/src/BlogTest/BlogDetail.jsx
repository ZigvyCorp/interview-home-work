import React from "react";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { productBlogDetail } = useSelector((state) => state.blogTest);
  console.log("productBlogDetail: ", productBlogDetail);
  return (
    <div className="row">
      <div className="col-6 mt-5">
        <div className="row">
          <div className="col-4">User</div>
          <div className="col-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            similique optio corporis atque veritatis recusandae ipsam quod quos
            dignissimos dolorem?
          </div>
        </div>
      </div>
      <div className="col-6">
        <div class="card border-success mb-3" style={{ width: 600 }}>
          <div className="navbar card-header bg-transparent border-success">
            <span className="fw-bold fs-6">Logo</span>
            Blog
            <div className="fs-6" style={{ maxheight: 20 }}>
              Post number : {productBlogDetail.id}
            </div>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">
              <span className="fw-bold fs-6">
                Title: {productBlogDetail.title}
              </span>
            </h5>
            <p class="card-text">{productBlogDetail.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

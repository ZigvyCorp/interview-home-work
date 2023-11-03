import React from "react";
import { useDispatch } from "react-redux";
import { blogTestActions } from "../store/actions";

const Blogitem = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-4">
      <div class="card border-success mb-3" style={{ width: 400, height: 400 }}>
        <div className="navbar card-header bg-transparent border-success">
          <span className="fw-bold fs-6">Logo</span>
          Blog
          <div className="fs-6" style={{ maxheight: 20 }}>
            Post number : {blog.id}
          </div>
          <div className="di"></div>
        </div>
        <div class="card-body text-success">
          <h5 class="card-title">
            <span className="fw-bold fs-2">Title:</span> {blog.title}
          </h5>
          <p class="card-text">{blog.body.substring(0, 200)}...</p>
        </div>
        <div class="card-footer bg-transparent border-success">
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(blogTestActions.handleProductBlogDetail(blog));
            }}
          >
            Detail
          </button>
          <button className="btn btn-danger ms-5 dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" >Comment</button>
          <ul class="dropdown-menu container" aria-labelledby="navbarDropdown">
            <li>
            <div className="row container">
          <div className="col-4">User</div>
          <div className="col-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            similique optio corporis atque veritatis recusandae ipsam quod quos
            dignissimos dolorem?
          </div>
        </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogitem;

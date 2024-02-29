import React, { useEffect } from "react";
import Blog from "../components/Blog";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const blogs = useSelector((state) => state.dataPosts.posts);

  const searchParams = new URLSearchParams(location.search);

  // page current equal 1 if don't pass any params.
  const pageCurrent = searchParams.get("page") || 1;

  // using redux saga to fetch all posts
  useEffect(() => {
    dispatch({
      type: "FETCH_POSTS_REQUEST",
      payload: { page: pageCurrent, pageSize: process.env.REACT_APP_PAGE_SIZE },
    });
  }, [dispatch, pageCurrent]);

  return (
    <div className="mt-4">
      {/* if blogs has data -> render all blogs -> if don't have any data render <h3 className="text-center">No Data</h3>*/}
      {blogs ? (
        <>
          {blogs.map((item, index) => (
            <Blog key={index} idBlog={item?._id} item={item} />
          ))}

          {/* implement pagination component */}
          <Pagination />
        </>
      ) : (
        <>
          <h3 className="text-center">No Data</h3>
        </>
      )}
    </div>
  );
};

export default Home;

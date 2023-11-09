import { Pagination, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Loading, PaginationComponent } from "components";
import { News, SidebarBlog } from "layouts";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from 'redux/asyncAction';
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const Blog = () => {
  const [valueSearch] = useOutletContext();
  console.log('valueSearch: ', valueSearch);
  const { currentUser } = useSelector((state) => state.userSlice);
  const { posts, isLoading } = useSelector((state) => state.postSlice);
  const [current, setCurrent] = useState(1);
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onChange = (page) => {
    setCurrent(page)
    const param = [];

    for (let i of params.entries()) param.push(i);
    const queries = {};

    for (let i of param) queries[i[0]] = i[1];
    queries.page = page
    navigate({
      search: createSearchParams(queries).toString(),
    });

    dispatch(getAllPosts({ page, limit: 6 }))


  };

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  useEffect(() => {
    if (valueSearch) {

      dispatch(getAllPosts({ limit: 6, title: valueSearch }))
    } else {
      dispatch(getAllPosts())

    }
  }, [valueSearch])

  return (
    <div>
      <SidebarBlog />

      {
        posts?.count > 0 ? <>
          <div className="my-5">
            <Pagination hideOnSinglePage={true} pageSize={6} current={current} onChange={onChange} total={posts?.count} />
          </div>
          <News />

        </> : <p>Not have posts</p>
      }

      {/* <div className="grid grid-cols-6 gap-5">
      <SidebarBlog />
        <News data={posts} isLoading={isLoading} />
      </div> */}
    </div>
  );
};

export default Blog;

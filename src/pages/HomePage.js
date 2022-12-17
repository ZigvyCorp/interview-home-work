import React, { useState } from 'react';
import PostList from '../components/PostList';
import Layout from '../views/Layout';

import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTION from '../redux/constants/constants';
const HomePage = () => {
  const dispatch   = useDispatch()
  const postLength = useSelector(state => state.PostReducer.postList.length);
  const posts      = useSelector(state => state.PostReducer.postList);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPage    = postLength / postsPerPage;

  
  // const currentTableData = useMemo(() => {

    const firstPageIndex   = (currentPage - 1) * postsPerPage;
    const lastPageIndex    = firstPageIndex + postsPerPage;
    const currentTableData = posts.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (postLength <= 0) {
    dispatch({
      type: ACTION.GET_POST,
    })
    dispatch({
      type: ACTION.GET_USER,
    })
    dispatch({
      type: ACTION.GET_COMMENT,
    })
  }

  return (
    <Layout>
      <PostList data={currentTableData}></PostList>
      <Pagination 
        totalPage={totalPage}
        paginate={paginate}>
      </Pagination>
    </Layout>
  );
};

export default HomePage;
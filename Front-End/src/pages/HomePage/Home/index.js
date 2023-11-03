import React, { useEffect, useState } from 'react'
import CardHome from './Card/index.js'
import { Card } from 'antd'
import SearchBar from './Search/index.js'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { actListPostRequest } from './Card/duck/action.js';
import { actGetPaging } from './duck/action.js'



export default function Home() {
  const [current, setCurrent] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actListPostRequest())
  }, [dispatch])
  const { keyword } = useSelector((state) => state.searchReducer);
  useEffect(() => {
    dispatch(actGetPaging(current, keyword))
  }, [dispatch, current, keyword]);

  // Data with redux saga
  // let { data, loading } = useSelector((state) => state.postsCardsReducer);

  // Data with search and pagination
  let { data, loading } = useSelector((state) => state.getPaging);



  const renderPosts = () => {
    return data?.map((post) => {
      return <CardHome key={post.id} post={post} />
    });
  }

  const onChange = (page) => {
    setCurrent(page);
  }

  return (
    <>
      <div className='text-center' >    <SearchBar /></div>

      <div className='container text-center'>
        {!loading ? renderPosts() : <Card
          className='mx-auto'
          style={{
            width: 450,
          }}
          loading={loading}
        >
        </Card>}

        <Pagination defaultCurrent={1} current={current} total={data?.[0]?.total} onChange={onChange} pageSize={10} />

      </div>
    </>
  )
}

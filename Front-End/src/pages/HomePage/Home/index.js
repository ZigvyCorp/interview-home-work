import React, { useEffect, useState } from 'react'
import CardHome from './Card/index.js'
import { Card } from 'antd'
import SearchBar from './Search/index.js'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { actTopMovie } from './duck/action.js'

export default function Home() {
  const [current, setCurrent] = useState(1);

  const actListPostRequest = () => {
    return {
      type: '@REQUEST',
    };
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actListPostRequest())
  }, [dispatch])

  useEffect(() => {
    dispatch(actTopMovie(current))
  }, [current]);



  let { data, loading } = useSelector((state) => state.topMovieReducer);

  let { keyword } = useSelector((state) => state.searchReducer);

  if (keyword) {
    data = data?.filter(post => post.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1)
  }

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

        <Pagination defaultCurrent={1} current={current} total={data?.[0]?.total} onChange={onChange} />

      </div>
    </>
  )
}

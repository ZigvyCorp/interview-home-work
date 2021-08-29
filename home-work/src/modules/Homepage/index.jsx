import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as homepageConstants from 'redux/constants/homepageConstants';
import { useDispatch } from 'react-redux';
import dataPosts from 'data/posts.json';
import { ItemPost } from 'components'
import styles from './homepage.module.scss';

const Homepage = memo(() => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [posts, setPosts] = useState(dataPosts)
  const [search, setSeatch] = useState('')

  const handleClickTest = () => {
    dispatch({
      type: homepageConstants.TEST,
      payload: [4, 5, 6],
    })
  }

  useEffect(() => {
    dispatch({
      type: homepageConstants.GET_POSTS_REQUEST,
    })
  }, [])

  const handleSearch = (e) => {
    setSeatch(e.target.value)
  }

  useEffect(() => {
    const searchPosts = dataPosts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setPosts(searchPosts)
    if (search === '') {
      setPosts(dataPosts)
    }
  }, [search])

  return (
    <>
      <div>
        <div className={styles.container__search}>
          <label htmlFor="search">Search: </label>
          <input id="search" value={search} onChange={handleSearch}/>
        </div>
        {posts && posts.length !== 0 && posts.map((el, idx) => 
          <ItemPost key={idx} data={el}/>
        )}
      </div>
      
    </>
  )
})

export default Homepage
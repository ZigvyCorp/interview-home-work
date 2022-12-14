import React from 'react'
import Header from '../../components/Header'
import ListBlog from '../ListBlog'

const Home = () => {
  return (
    <div className='container_home'>
      <Header />
      <ListBlog />
    </div>
  )
}

export default Home
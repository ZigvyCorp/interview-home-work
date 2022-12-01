import React from 'react'
import Header from '../../../components/Header/Header'
import PostCart from '../components/PostCart/PostCart'


const Home = () => {
  return (
    <div className='container'>
        <div className='border border-3 border-light p-0 m-0'>
            <Header/>
            <PostCart/>
        </div>
    </div>
    
  )
}

export default Home
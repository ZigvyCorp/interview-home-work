import React, { useEffect } from 'react'
import ItemPost from './ItemPost';
import { useState,useMemo } from 'react';
import { List,Divider } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { GET_API_POSTS, SET_POSTS, SET_USERS,GET_API_USERS } from '../store/actions/actionTypes';
import { searchPosts } from '../store/actions/actions';
import AppHeader from './AppHeader';
import SearchTitle from './SearchTitle';
const Homepage = () => {
  const dispatch = useDispatch();
   const currentPosts  = useSelector(state => state.posts,shallowEqual);
   const [posts,setPosts]=useState(currentPosts);
  useEffect(() => {
        dispatch({type: GET_API_POSTS});
  },[dispatch]); 
  //get User
  useEffect(() => {
    dispatch({type: GET_API_USERS})
}, [dispatch]);
///
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = currentPosts.filter(post =>
      post.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setPosts(filtered)
  },[searchTerm,currentPosts])
  const handleSearch = (value) => {
    setSearchTerm(value);
    dispatch(searchPosts(value));
  };
  return (
    <>
      <SearchTitle onSearch={handleSearch}/>
      <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={posts}
    renderItem={item => (
      <>
      <ItemPost key={item.postId} post={item} />
      <Divider style={{ fontWeight: 'bold', backgroundColor: 'green', borderWidth:'2px' }} />
      </>
    )}
  />
    </>
    
  )
}

export default Homepage;
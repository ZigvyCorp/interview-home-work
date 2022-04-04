import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Blog from './components/blog';

export type post = {
  id:number
  owner:number
  title: string
  content: string
  created_at:number
  tags:[string]
}

function App() {
  const posts = useRef<[post]>() 
  const [isPostsLoaded,setIsPostsLoaded] = useState(false);
  useEffect(()=>{
    getPosts();
  },[])

  async function getPosts(){
    const response = await fetch('/api/posts');
    posts.current = await response.json();
    setIsPostsLoaded(true);
  }

  return (
    <div className="App">
      <h1>BLOGS</h1>
      {isPostsLoaded && <div className='blog'>
        {posts.current?.map((post) => <Blog post={post}/>)}
      </div> }
    </div>
  );
}

export default App;

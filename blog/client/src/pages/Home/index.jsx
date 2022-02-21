import React, { useEffect } from 'react'
import Post from '../../components/Post'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector,useDispatch } from 'react-redux';
import { getComments, getPostWithID, getUsers } from '../../redux/action/postAction';
function Home() {
  const {posts, users, comments} = useSelector(state => state.posts)
  const dispatch = useDispatch();
  const fetchMoreData = ()=>{
    console.log("fetch")
    dispatch(getPostWithID(posts?.length + 1));
  }
  useEffect(() => {
    if(posts.length < 10){
      dispatch(getPostWithID(posts?.length + 1));
    }
  }, [posts,dispatch]);

  useEffect(() => {
    if(users.length === 0){
      dispatch(getUsers());
    }
  }, [users,dispatch]);
  useEffect(() => {
    if(comments.length === 0){
      dispatch(getComments())
    }
  }, []);
  
  return (
    <section style={{paddingTop:10, paddingBottom:40}} className='home'>
      <div className='list-post' id='list-post'>
        <InfiniteScroll
          style={{
            display:"flex",
            flexDirection:"column",
            gap:10
          }}
          dataLength={posts?.length}
          next={fetchMoreData}
          hasMore={posts.length < 100}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          {posts.map((post, index) => (
            <Post key = {index} data = {post}/>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  )
}

export default Home
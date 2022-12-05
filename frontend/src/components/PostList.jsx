import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
// import { Typography } from 'antd';
// const { Title } = Typography;
const PostList = () => {
  const posts = useSelector(state => state.post.postList);

  return (
    <>
        <div className='post-list'>
            {posts.map((data, key) =>
                <PostItem data={data} key={data.id}/>
            )}
        </div>
    </>
  )
}

export default PostList
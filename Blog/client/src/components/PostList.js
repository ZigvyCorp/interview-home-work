import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions'
import { postState$ } from '../redux/selectors';
import PostItem from './PostItem';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postState$);
    console.log('[PostList - posts]', posts);

    React.useEffect(()=>{
        dispatch(actions.getPosts.getPostsRequest())
    },[dispatch])
    
    return (
        <div>
        {posts.map((post) => (
          <div>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    )
}

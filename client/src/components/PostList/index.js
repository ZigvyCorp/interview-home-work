import React from 'react';
import {Grid} from "@material-ui/core";
import Post from './Post';
import { useDispatch,useSelector} from 'react-redux';
import* as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';


export default function PostList(){

    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    console.log('[PostList - posts]',posts);
    React.useEffect(()=>{
        dispatch(actions.getPosts.getPostsRequest())
    },[dispatch]);

    return ( <Grid container spacing={2} alignItems='stretch'>
     {posts.map((post) => (
        <Grid key={post._id} item xs={12} >
          <Post post={post} />
        </Grid>
      ))}
  </Grid>);
    
}
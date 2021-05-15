import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsState$, postsState$, usersState$ } from '../../../redux/selectors';
import PostFilterForm from '../utils/postFilterForm';
import PostItem from '../utils/postItem/PostItem';
import * as postActions from '../../../redux/actions/post';
function Post() {
    const posts = useSelector(postsState$);
    const [search, setSearch] = useState([]);
    const users = useSelector(usersState$);
    const comments = useSelector(commentsState$);
    const dispatch = useDispatch()
    function handleFiltersChange(searchTerm){
        console.log(searchTerm);
            if(searchTerm.length>1){

                setSearch(posts.filter(post=>{
                    return post.title.toLowerCase().match(searchTerm.toLowerCase());
                }));
                dispatch(postActions.searchPosts.searchPostsSuccess(search));
                return;
            }else{
                console.log(1)
                setSearch([]);
                dispatch(postActions.getPosts.getPostsRequest());
            }
    }
    return (

        <div className='post-page'>
            <div className="search-form">
                <PostFilterForm onSubmit={handleFiltersChange} />
            </div>

            {
                (posts.length===0&&users.length===0&&comments.length===0)? (<h1>Loading...</h1>):
                posts.map(post=>(
                    <PostItem key={ post._id } post={post} users={users} comments={comments} />
                ))
            }
        </div>
    )
}

export default Post;

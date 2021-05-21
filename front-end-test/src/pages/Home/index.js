import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/store/actions/posts';
import Spinner from '../../common/Spinner'
import AllPosts from '../../common/AllPosts';


const HomePage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])



    return (
        (posts) ? <div>

            <h1 className="text-uppercase text-center font-weight-bold my-5">all posts</h1>
            <AllPosts posts={posts} />

        </div> : <Spinner />
    );
}

export default HomePage;
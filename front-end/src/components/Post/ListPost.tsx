import React from 'react';
import { PostResponse } from '../../interfaces/response/PostResponse';
import SinglePost from './SinglePost';

interface IListPostProps {
    posts: PostResponse[]
}

const ListPost: React.FC<IListPostProps> = (props) => {
    const { posts } = props;

    return (
        <>
            {posts.map(post => <SinglePost data={post}/> )}
        </>
    )
}

export default ListPost
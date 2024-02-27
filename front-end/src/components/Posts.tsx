import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPostsStart, selectPosts } from '../store/slices/postSlice';

export function Posts() {
    const posts = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(fetchPostsStart())}>Fetch posts Saga</button>
            <ul>
                {posts.map(post => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

import { useState } from 'react';
import PostList from '../../features/Posts/Components/PostList/PostList';

export default function HomePage() {

    const [page, setPage] = useState(1);

    return (
        <>
            <PostList />

        </>
    );
}
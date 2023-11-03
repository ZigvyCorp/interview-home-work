import { useState } from 'react';
import PostList from '~/features/posts/components/PostList/PostList';
import usePost from '~/features/posts/hooks/usePost';

export default function HomePage() {
    const [page, setPage] = useState(1);
    const { postList, postStatus, hasNextPage } = usePost({ page });

    return (
        <>
            <div style={{ marginTop: '20px', overflowAnchor: 'none' }}>
                {postStatus === 'success' && postList.length !== 0 ? (
                    <PostList
                        postList={postList}
                        onChangePage={setPage}
                        hasNextPage={hasNextPage}
                    />
                ) : null}
            </div>
        </>
    );
}

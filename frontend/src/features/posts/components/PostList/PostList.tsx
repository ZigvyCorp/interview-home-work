/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import { Post } from '../../models/post';
import PostItem from '../PostItem/PostItem';

type Props = {
    postList: Post[];
    onChangePage: (page: any) => void;
    hasNextPage: boolean;
};

const PostList = memo(function PostList({ postList, onChangePage, hasNextPage }: Props) {
    const { setElement } = useIntersectionObserver({ hasNextPage, onChange: onChangePage });

    return (
        <>
            {postList.map((post) => (
                <PostItem key={post.id} postItem={post} />
            ))}
            <div ref={setElement}></div>
        </>
    );
});

export default PostList;

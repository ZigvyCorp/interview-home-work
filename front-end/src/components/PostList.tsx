import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Post, fetchPostsStart, selectPosts, loadMorePostsStart, searchPostsStart } from '../store/slices/postSlice';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PostItem from './PostItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostSkeleton from './PostSkeleton';

export function PostList() {
    const { posts, loading, hasMore, keyword, error } = useAppSelector(selectPosts);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length == 0) dispatch(fetchPostsStart());
        if (keyword !== '') setSearchTerm(keyword);
    }, []);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        dispatch(searchPostsStart(term));
    };

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            dispatch(loadMorePostsStart());
        }
    };

    return (
        <div className="min-h-[100vh]">
            <div className="bg-black border-b-[1px] border-b-gray-200  fixed top-0 left-0 right-0 h-[60px] flex items-center px-4">
                <Input
                    onChange={e => handleSearchChange(e)}
                    className="bg-blue-500 w-1/2 rounded-md"
                    size="large"
                    placeholder="Search post by title"
                    allowClear
                    value={searchTerm}
                    addonBefore={<SearchOutlined />}
                />
            </div>
            {error ? (
                <div className="min-h-[100vh] justify-center flex items-center text-2xl text-white">
                    Something's wrong
                </div>
            ) : (
                <InfiniteScroll
                    dataLength={posts.length}
                    next={handleLoadMore}
                    hasMore={hasMore}
                    loader={<PostSkeleton />}
                    endMessage={<p className="text-center text-[30px] py-8 text-white">No more posts to load</p>}
                >
                    <div className="w-[90%] md:w-4/5 max-w-[1200px] mx-auto pt-[72px]">
                        {posts.map((post: Post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </div>
    );
}

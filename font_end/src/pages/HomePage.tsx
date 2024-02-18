import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider } from 'antd';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import Blog from '../components/Blog';
import { selectAllPost } from '../features/posts/postsSlice';
import SkeletonBlog from '../components/SkeletonBlog';
import { GET_POSTS_FETCH } from '../app/actions';

const HomePage = () => {
    const posts = useAppSelector(selectAllPost);
    const dispatch = useAppDispatch();

    const loadMoreData = () => {
        dispatch(GET_POSTS_FETCH(posts.length));
    };
    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={loadMoreData}
            hasMore={posts.length < 80}
            loader={
                <>
                    <SkeletonBlog />
                    <SkeletonBlog />
                    <SkeletonBlog />
                </>
            }
            endMessage={
                <Divider plain>
                    <p className="dark:text-neutral-300">
                        It is all, nothing more 🤐
                    </p>
                </Divider>
            }
            scrollableTarget="scrollableDiv"
        >
            {posts.map((post) => (
                <Blog key={post.id} post={post} />
            ))}
        </InfiniteScroll>
    );
};
export default HomePage;

import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider } from 'antd';

import nextPostIds from '../lib/nextPostIds';

import SkeletonBlobs from '../components/SkeletonBlobs';
import Blog from '../components/Blog';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch(
            `https://jsonplaceholder.typicode.com/posts${nextPostIds(
                data.length
            )}`
        )
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
        // eslint-disable-next-line
    }, []);

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={
                <>
                    <SkeletonBlobs />
                    <SkeletonBlobs />
                    <SkeletonBlobs />
                </>
            }
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
        >
            {data.map((blog) => (
                <Blog key={blog.id} content={blog} />
            ))}
        </InfiniteScroll>
    );
};

export default Home;

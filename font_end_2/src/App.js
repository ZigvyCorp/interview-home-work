import './index.css';
import { Layout, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

import nextPostIds from './lib/nextPostIds';

import Blog from './components/Blog';
import SkeletonBlobs from './components/SkeletonBlobs';

const { Header, Content } = Layout;
export default function App() {
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
        <Layout>
            <Header className="sticky top-0 z-10 bg-white flex justify-between">
                <div>Logo</div>
                <div>BLOGS</div>
                <div>Menu</div>
            </Header>
            <Content className="px-12">
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
                    endMessage={
                        <Divider plain>It is all, nothing more 🤐</Divider>
                    }
                    scrollableTarget="scrollableDiv"
                >
                    {data.map((blog) => (
                        <Blog key={blog.id} content={blog} />
                    ))}
                </InfiniteScroll>
            </Content>
        </Layout>
    );
}

import { useEffect, useState } from 'react';
import { Layout, Input } from 'antd';

import { getPost } from '../../api/postApi';
import { getCommentsOfPost } from '../../api/commentApi';
import Post from '../../components/post/post.component';
import Header from '../../components/header/header.component';

const { Content } = Layout;
const { Search } = Input;

const HomePage = (props) => {
    const [posts, setPosts] = useState([]);

    const getData = async () => {
        const postsData = await getPost();

        const result = await Promise.all(
            postsData.posts.docs.map(async (post) => {
                const comments = await getCommentsOfPost(post._id);
                return { ...post, comments };
            }),
        );
        setPosts(result);
    };

    const onSearch = (value) => {
        if (value) {
            const resultSearch = posts.filter((item) => item.title.toLowerCase().includes(value));
            setPosts(resultSearch);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Layout>
            <Header />
            <Search
                placeholder="Input title to search"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
            <Content style={{ padding: '0 50px' }}>
                {posts.map((post) => (
                    <Post
                        key={post._id}
                        title={post.title}
                        content={post.content}
                        author={post?.owner?.name}
                        createdAt={post?.createdAt}
                        comments={post.comments}
                    />
                ))}
            </Content>
        </Layout>
    );
};

export default HomePage;

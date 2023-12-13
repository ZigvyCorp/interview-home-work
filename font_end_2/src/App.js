import './index.css';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import useFetcher from './hooks/useFetcher';

import Blog from './components/Blog';

const { Header, Content } = Layout;
export default function App() {
    const { data, isLoading } = useFetcher(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    if (isLoading)
        return (
            <Spin className='w-full h-[100vh] flex items-center justify-center'
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 24,
                        }}
                        spin
                    />
                }
            />
        );
    return (
        <Layout>
            <Header className="sticky top-0 z-10 bg-white flex justify-between">
                <div>Logo</div>
                <div>BLOGS</div>
                <div>Menu</div>
            </Header>
            <Content
                className='px-12'
            >
                {data.map((blog) => (
                    <Blog key={blog.id} content={blog} />
                ))}
            </Content>
        </Layout>
    );
}

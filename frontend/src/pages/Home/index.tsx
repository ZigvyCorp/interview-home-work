import { Col, Layout, Row, Space } from "antd";
import { Container } from "components/Container";
import { Header } from "components/Header";
import { PaginationPost } from "components/Pagination";
import { Post } from "components/Post";
import { useEffect } from "react";
import { postSaga } from "redux/posts/postSaga";
import { useAppDispatch, useAppSelector } from "redux/store";

export function Home() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.post?.posts) || [];
    console.log(posts);

    useEffect(() => {
        dispatch(postSaga);
      }, [dispatch]);
      
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout>
                <Header />
                <Container >
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                    <PaginationPost/>
                </Container>
            </Layout>
        </Space>
    )
}

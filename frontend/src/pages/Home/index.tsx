import { Col, Layout, Row, Space } from "antd";
import { Container } from "components/Container";
import { Header } from "components/Header";

export function Home() {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <Layout>
                <Header />
                <Container >
                    <h1>This is container</h1>
                </Container>
            </Layout>
        </Space>
    )
}

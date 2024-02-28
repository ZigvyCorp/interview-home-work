import Layout, { Content } from "antd/es/layout/layout";
import Header from "../components/Headers/Header";

export default function Detail() {
  return (
    <Layout>
        <Header/>
        <Content style={{ padding: '0 60px' }}>
            <h1>
                Detail Page
            </h1>
        </Content>
    </Layout>
  )
}

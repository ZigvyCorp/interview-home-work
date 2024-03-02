/* eslint-disable react/prop-types */

import { Layout } from "antd";
import PostList from "./components/PostList";

import Headers from "./components/Headers";

const { Content } = Layout;
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Layout>
        <Headers />
        <Content>
          <PostList />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

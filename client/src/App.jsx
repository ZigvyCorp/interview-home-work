/* eslint-disable react/prop-types */

import { Layout } from "antd";
import PostList from "./components/PostList";
import { Typography } from "antd";
import Headers from "./components/Headers";

const { Content } = Layout;
// const headerStyle = {
//   width: "100%",
//   textAlign: "center",
//   color: "#000000",
//   height: 64,
//   // paddingInline: 48,
//   // lineHeight: "64px",
//   backgroundColor: "#ffffff",
// };

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

import React from "react";

import { Layout, ConfigProvider, FloatButton, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./App.css";
import BlogHeader from "./components/BlogHeader";
import Post from "./components/Post";

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider>
      <Layout>
        <BlogHeader />

        <Layout
          style={{
            padding: "0px 50px",
            backgroundColor: "#fff",
          }}
        >
          <Post />
        </Layout>
      </Layout>

      <Modal
        title="Create your post"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <FloatButton onClick={showModal} icon={<PlusOutlined />} />
    </ConfigProvider>
  );
}

export default App;

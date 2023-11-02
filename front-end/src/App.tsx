import React from "react";

import {
  Layout,
  ConfigProvider,
  FloatButton,
  Modal,
  Button,
  theme,
  Flex,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./App.css";
import BlogHeader from "./components/BlogHeader";
import PostContainer from "./components/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "./actions/posts";
import {
  getPostsPendingSelector,
  getPostsSizeSelector,
} from "./store/posts/selectors";

function App() {
  const [page, setPage] = React.useState<number>(1);
  const size = useSelector(getPostsSizeSelector);
  const pending = useSelector(getPostsPendingSelector);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { token } = theme.useToken();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsRequest(page));
  }, [page, dispatch]);

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
      <Layout
        style={{
          backgroundColor: "transparent",
          padding: "1rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          style={{
            maxWidth: token.screenLG,
          }}
          align="center"
          vertical
          gap={12}
        >
          <BlogHeader />

          <Layout
            style={{
              padding: "0px 50px",
              backgroundColor: "#fff",
            }}
          >
            <PostContainer />
          </Layout>

          {!(size === page * 1) && !pending && (
            <Button onClick={() => setPage((prev) => prev + 1)}>
              Load More
            </Button>
          )}
        </Flex>
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

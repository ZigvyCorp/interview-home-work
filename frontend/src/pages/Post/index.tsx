import { Row, Col, Input } from "antd";
import { PostList } from "./components/PostList";

const PostPage = () => {

  return (
    <Row gutter={16}>
      <Col span={24}>
        <PostList />
      </Col>
    </Row>
  );
};

export default PostPage;

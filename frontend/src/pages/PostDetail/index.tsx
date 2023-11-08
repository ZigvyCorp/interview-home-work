import { Row, Col } from "antd";
import PostJson from "./../../mock/posts.json";
import { PostItem } from "../../components/PostItem";

const PostDetailPage = () => {

  return (
    <Row gutter={16}>
      <Col span={24}>
        <PostItem post={PostJson[0] as any}/>
      </Col>
    </Row>
  );
};

export default PostDetailPage;

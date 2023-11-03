import "./index.scss";
import { Card, Space } from "antd";
import { useNavigate } from 'react-router-dom';

const PostItem = ({ id, post }) => {
  const navigate  = useNavigate();
  return (
    <div className="card-post">
      <Space direction="vertical" size={16}>
        <Card
          title={`Post tile ${post?.id}`}
          extra={<div onClick={() => navigate(`post/${post?.id}`)}>detail</div>}
          style={{ width: 700 }}
        >
          <p>title: {post?.title}</p>
          <p>body: {post?.body}</p>
        </Card>
      </Space>
    </div>
  );
};
export default PostItem;

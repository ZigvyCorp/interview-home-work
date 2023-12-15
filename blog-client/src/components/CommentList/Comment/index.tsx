import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Comment({}): React.ReactElement {
  return (
    <Space>
      <Avatar shape="circle" icon={<UserOutlined />} size={"large"} />
      <Space direction="vertical">
        <Space direction="horizontal">
          <span>Username</span>
          <span>a day ago</span>
        </Space>
        <span>Description</span>
      </Space>
    </Space>
  );
}

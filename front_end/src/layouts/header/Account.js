import { Avatar, Space, Typography } from "antd";
 const { Text } = Typography;
export default function Account() {
  return (
    <Space style={{ cursor: 'pointer' }}>
      <Avatar style={{
        backgroundColor: '#f56a00'
      }}>
        C
      </Avatar>
      <Text style={{ color: 'white' }}>Cat face</Text>
    </Space>
  )
}

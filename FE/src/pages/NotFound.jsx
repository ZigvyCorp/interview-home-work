import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
const { Text } = Typography;
export function NotFound() {
  return (
    <Content style={{ textAlign: 'center' }}>
      <Text strong style={{ fontSize: '24px' }}>
        Page Not Found
      </Text>
    </Content>
  );
}

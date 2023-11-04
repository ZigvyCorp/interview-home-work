import { Typography } from 'antd';

const { Text } = Typography;

export default function Logo() {
  return (
    <div style={{
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: 8,
      cursor: 'pointer',
      fontWeight: 'bold',
      color: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#72a6e5',
    }}>
      <Text>
        LOGO
      </Text>
    </div>
  )
}

import { Skeleton, Space } from 'antd'

function SkeletonHome() {
  return (
    <Space direction='vertical' size={[0, 16]} style={{ display: 'flex' }}>
      {[1, 2, 3, 4, 5].map((item) => (
        <Skeleton
          key={item}
          active
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px'
          }}
          paragraph={{ rows: 4 }}
        />
      ))}
    </Space>
  )
}

export default SkeletonHome

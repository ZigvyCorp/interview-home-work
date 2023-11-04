import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <div className='flex-col flex-center'>
      <Spin spinning={true} />
      <span>Loading...</span>
    </div>
  )
}

export default Loading
import { Avatar, Button, Col, Flex, Row, Space, Typography } from 'antd'
import { memo } from 'react'
import { CommentType } from 'src/types'
const { Text, Paragraph } = Typography

function Comment({ comment }: { comment: CommentType }) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={2}>
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      </Col>
      <Col span={22}>
        <Flex vertical gap='small'>
          <Space>
            <Text strong>{comment?.author}</Text>
            <Text type='secondary' style={{ fontSize: '12px' }}>
              {comment?.created_at}
            </Text>
          </Space>

          <Paragraph>{comment?.content}</Paragraph>
          <Text type='secondary' style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => {}}>
            Reply To
          </Text>
        </Flex>
      </Col>
    </Row>
  )
}

export default memo(Comment)

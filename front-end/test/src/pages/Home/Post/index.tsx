import { Card, Col, Collapse, Flex, Row, Space, Tag } from 'antd'
import { Typography } from 'antd'
import Comments from '../Comments'
import moment from 'moment'
import { PostsType } from 'src/types'
import dataComment from 'src/data/comment.json'

const { Text, Paragraph } = Typography

const colorTag = ['magenta', 'volcano', 'orange', 'green', 'blue']

function Post({ post }: { post: PostsType }) {
  const items = [
    {
      key: '1',
      label: `${dataComment.length} replies`,
      children: <Comments />
    }
  ]
  return (
    <Card title={post?.title} bordered={false} style={{ width: '100%' }} headStyle={{ textAlign: 'center' }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Flex align='start' vertical>
            <Text strong>Author: {post?.author}</Text>
            <Text strong>Created At: {moment(post?.updatedAt).format('HH:MM MMM DD,YYYY')}</Text>
          </Flex>
        </Col>
        <Col span={12}>
          <Space size={[0, 8]} wrap>
            {post?.tags?.map((item, i) => (
              <Tag key={i} color={colorTag[i] || 'magenta'}>
                {item}
              </Tag>
            ))}
          </Space>
        </Col>
        <Col span={24}>
          <Paragraph>{post?.content}</Paragraph>
        </Col>
        <Col span={24}>
          <Collapse defaultActiveKey={['1']} ghost items={items} />
        </Col>
      </Row>
    </Card>
  )
}

export default Post

import { Avatar, Button, Col, Flex, Input, Row } from 'antd'

function CommentForm() {
  return (
    <Row gutter={[8, 8]}>
      <Col span={2}>
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
      </Col>
      <Col span={18}>
        <Input
          placeholder='Write a comment...'
          bordered={false}
          style={{
            borderBottom: '1px solid rgba(204, 204, 204, 0.3)',
            borderRadius: '0px'
          }}
        />
      </Col>
      <Col span={4}>
        <Flex justify='end'>
          <Button size='middle'>Comment</Button>
        </Flex>
      </Col>
    </Row>
  )
}

export default CommentForm

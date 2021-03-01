import { Accordion, Badge, Card, Col, Row } from 'react-bootstrap'
import Comment from './Comment'

const Post = ({post}) => {
  return (
    <Card key={post.id} className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="text-center">{post.title}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={8}>
              Author: {post.user.name} <br/> Created at: Sep 20, 2018
            </Col>
            <Col md={4} className="float-right">
              <Badge pill variant="primary">Primary</Badge>{' '}
              <Badge pill variant="secondary">Secondary</Badge>{' '}
              <Badge pill variant="success">Success</Badge>{' '}
              <Badge pill variant="secondary">Secondary</Badge>{' '}
              <Badge pill variant="success">Success</Badge>{' '}
              <Badge pill variant="danger">Danger</Badge>{' '}
              <Badge pill variant="warning">Warning</Badge>{' '}
            </Col>
          </Row>
          <Row>
            <Col><p className="mt-4">{post.body}</p></Col>
          </Row>
        </Card.Text>
        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              {post.comments?.length || 0} Comments
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {post.comments?.map(c => <Comment key={c.id} email={c.email} body={c.body}/>)}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  )
}

export default Post

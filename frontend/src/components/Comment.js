import { Col, Image, Row } from 'react-bootstrap'

const Comment = ({email, body}) => {
  return (
    <section className="mt-2">
      <Row>
        <Col md={1}>
          <Image className="m-auto"  roundedCircle style={{width: '41px'}}
                 src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"/>
        </Col>
        <Col md={11}>
          <h6 className="d-inline-block">{email}</h6>
          <h6 className="d-inline-block text-muted ml-2">a day ago</h6>
          <p>{body}</p>
          <h6 className="d-inline-block">Reply to</h6>
        </Col>
      </Row>
    </section>
  )
}

export default Comment

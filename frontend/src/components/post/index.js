import { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import moment from "moment";
import Comment from "../comment";
import Tag from "../tag";


function Post({ data }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">{data.title}</Card.Title>
        <Row className="d-flex m-2">
          <Col xs={8}>
            <Card.Text>Author : {data.owner?.name}</Card.Text>
            <Card.Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Card.Text>
          </Col>
          <Col xs={4}>
            {data.tags.length > 0 &&
              data.tags.map((tag, index) => (
               <Tag key={index} tagName={tag}/>
              ))}
          </Col>
        </Row>
        <Card.Text style={{ minHeight: "5rem" }}>
          {`${String(data.content).substring(0, 100)}...`}
        </Card.Text>
        <Button href={`/posts/${data._id}`}>Read More</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted me-2">{data.countComment} relies</small>
        <Comment />
      </Card.Footer>
    </Card>
  );
}

export default Post;

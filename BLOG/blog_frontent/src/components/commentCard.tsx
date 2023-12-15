import React, { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CommentType } from "types/commentType";

const CommentCard: FC<CommentType> = ({ user, body }) => (
  <Card.Body className="p-2">
    <div className="d-flex flex-start">
      <img
        className="rounded-circle shadow-1-strong me-3"
        src="https://static.theprint.in/wp-content/uploads/2019/11/dhole.jpg"
        alt="avatar"
        width="30"
        height="30"
      />
      <div>
        <h6 className="fw-bold">{user.name}</h6>
        <p className="mb-0">{body}</p>
      </div>
    </div>
  </Card.Body>
);

const CommentSection: FC<{ commentListItems: CommentType[] }> = ({
  commentListItems,
}) => (
  <section>
    <Container className="p-0 m-0">
      <Row className="d-flex justify-content-center">
        <Col>
          <Card text="dark" className="border-0">
            {commentListItems &&
              commentListItems.map((commentItem, indexItem) => {
                return (
                  <div key={indexItem}>
                    <CommentCard key={indexItem} {...commentItem} />
                  </div>
                );
              })}
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default CommentSection;

import { Col, Container, Row } from "react-bootstrap";
import { PostDataType } from "../model";
import { NavLink, useLocation } from "react-router-dom";

/**
 * Renders the header of a post.
 * @param title - the title of the post
 * @param user - the username of the author
 * @param id - the postId of the post
 * @returns the post header
 */
export default function PostHeader({
  title,
  user,
  _id,
}: Pick<PostDataType, "title" | "user" | "_id">) {
  const location = useLocation();
  return (
    <Container className="my-1">
      <Row className="d-flex justify-content-between">
        <Col xs={12} md={4}>
          <p>
            <span className="fw-bold">Author:</span> {user}
          </p>
          <p>
            <span className="fw-bold">Created at:</span>{" "}
            {new Date().toLocaleDateString()}
          </p>
        </Col>
        <Col xs={12} md={4}>
          <p className="text-uppercase fw-bold">{title}</p>
        </Col>
        <Col xs={12} md={4}>
          {location.pathname === "/" && (
            <NavLink
              to={`/${_id}`}
              className="text-primary text-decoration-underline"
            >
              Open for more detail
            </NavLink>
          )}
        </Col>
      </Row>
    </Container>
  );
}

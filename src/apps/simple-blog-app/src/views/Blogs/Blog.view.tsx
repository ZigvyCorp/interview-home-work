import React from 'react';
import BlogModel from '../../shared/models/Blog';
import { Container, Card } from 'react-bootstrap';

interface IProps {
  blog: BlogModel;
}

interface IState {
}

class Blog extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    const theBlog = this.props.blog;
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              {theBlog.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Author: {theBlog.owner}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Created at: {new Date(theBlog.created_at).toDateString()}</Card.Subtitle>
            <Card.Text>
              {theBlog.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default Blog;

import React from 'react';
import { Container } from 'react-bootstrap';

function NotFoundPage() {
  return (
    <Container>
      <h1 className="my-4">Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Container>
  );
}

export default NotFoundPage;
